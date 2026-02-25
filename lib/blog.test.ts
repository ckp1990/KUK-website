import { test, mock } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { getPostBySlug, getPostSlugs } from './blog.ts';

test('getPostBySlug', async (t) => {
  await t.test('returns empty object if file does not exist', () => {
    // Mock fs.existsSync to return false
    const existsSyncMock = mock.method(fs, 'existsSync', () => false);

    const result = getPostBySlug('non-existent');
    assert.deepStrictEqual(result, {});

    existsSyncMock.mock.restore();
  });

  await t.test('returns post data if file exists', () => {
    // Mock fs.existsSync to return true
    const existsSyncMock = mock.method(fs, 'existsSync', () => true);
    // Mock fs.readFileSync to return dummy content
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

  await t.test('filters fields correctly', () => {
    const existsSyncMock = mock.method(fs, 'existsSync', () => true);
    const readFileSyncMock = mock.method(fs, 'readFileSync', () => {
      return '---\ntitle: "Test Post"\ndate: "2023-01-01"\nauthor: "Jules"\n---\nContent here';
    });

    const result = getPostBySlug('test-post', ['title', 'author']);

    assert.strictEqual(result.title, 'Test Post');
    assert.strictEqual(result.author, 'Jules');
    assert.strictEqual(result.slug, undefined);
    assert.strictEqual(result.content, undefined);

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
