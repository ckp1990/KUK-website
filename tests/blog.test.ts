import { test, mock } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { getPostBySlug, getPostSlugs, markdownToHtml } from '../lib/blog.ts';

test('markdownToHtml', async (t) => {
  await t.test('converts basic markdown to HTML', async () => {
    const result = await markdownToHtml('# Hello');
    // The actual output depends on remark's behavior, but for testing purposes
    // with our mock/real remark we expect a certain transformation.
    assert.ok(result.includes('<h1>Hello</h1>'));
  });

  await t.test('converts bold text', async () => {
    const result = await markdownToHtml('**bold**');
    assert.ok(result.includes('<strong>bold</strong>'));
  });

  await t.test('sanitizes unsafe HTML', async () => {
    const result = await markdownToHtml('<script>alert(1)</script>');
    assert.ok(!result.includes('<script>'));
  });

  await t.test('handles empty string', async () => {
    const result = await markdownToHtml('');
    assert.strictEqual(result, '');
  });
});

test('getPostBySlug', async (t) => {
  await t.test('returns empty object if file does not exist', () => {
    const existsSyncMock = mock.method(fs, 'existsSync', () => false);

    const result = getPostBySlug('non-existent');
    assert.deepStrictEqual(result, {});

    existsSyncMock.mock.restore();
  });

  await t.test('returns post data if file exists', () => {
    const existsSyncMock = mock.method(fs, 'existsSync', () => true);
    const readFileSyncMock = mock.method(fs, 'readFileSync', () => {
      return '---\ntitle: "Test Post"\ndate: "2023-01-01"\n---\nContent here';
    });

    const result = getPostBySlug('test-post', ['title', 'slug', 'content']);

    assert.strictEqual(result.title, 'Test Post');
    assert.strictEqual(result.slug, 'test-post');
    assert.strictEqual(result.content, 'Content here');

    existsSyncMock.mock.restore();
    readFileSyncMock.mock.restore();
  });
});

test('getPostSlugs', async (t) => {
  await t.test('returns empty array if directory does not exist', () => {
    const existsSyncMock = mock.method(fs, 'existsSync', () => false);

    const result = getPostSlugs();
    assert.deepStrictEqual(result, []);

    existsSyncMock.mock.restore();
  });

  await t.test('returns list of files if directory exists', () => {
    const existsSyncMock = mock.method(fs, 'existsSync', () => true);
    const readdirSyncMock = mock.method(fs, 'readdirSync', () => ['post1.md', 'post2.md']);

    const result = getPostSlugs();
    assert.deepStrictEqual(result, ['post1.md', 'post2.md']);

    existsSyncMock.mock.restore();
    readdirSyncMock.mock.restore();
  });
});
