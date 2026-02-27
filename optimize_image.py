from PIL import Image

def optimize_image(input_path, output_path, max_width=1200, quality=85):
    try:
        img = Image.open(input_path)

        # Convert to RGB (in case of RGBA or CMYK)
        if img.mode != 'RGB':
            img = img.convert('RGB')

        width, height = img.size
        aspect_ratio = height / width

        if width > max_width:
            new_width = max_width
            new_height = int(new_width * aspect_ratio)
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            print(f"Resized image from {width}x{height} to {new_width}x{new_height}")
        else:
            print(f"Image width ({width}px) is already within limit ({max_width}px). Skipping resize.")

        # Save the image
        img.save(output_path, 'JPEG', quality=quality, optimize=True)
        print(f"Saved optimized image to {output_path}")

    except Exception as e:
        print(f"Error optimizing image: {e}")

if __name__ == "__main__":
    optimize_image('public/ullas-karanth-sandesh-kadur.jpg', 'public/ullas-karanth-sandesh-kadur.jpg')
