
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to the home page
        await page.goto("http://localhost:3000")

        # Wait for the testimonials section to load
        await page.wait_for_selector("text=Testimonials")

        # Scroll to the testimonials section
        # There might be multiple "Testimonials" (heading and menu)
        # Actually let's target the h2
        heading = page.locator("h2", has_text="Testimonials")
        await heading.scroll_into_view_if_needed()

        # Take a screenshot of the initial state (first 3 testimonials)
        await page.screenshot(path="verification/testimonials_initial.png")

        # Find the next button (right arrow)
        # Based on my code: aria-label="Next testimonial"
        next_button = page.get_by_label("Next testimonial")

        if await next_button.is_visible():
            print("Next button found.")
            await next_button.click()
            # Wait a bit for transition
            await page.wait_for_timeout(500)
            # Take another screenshot
            await page.screenshot(path="verification/testimonials_next.png")
        else:
            print("Next button NOT found.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
