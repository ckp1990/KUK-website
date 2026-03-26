import { v2 as cloudinary } from "cloudinary";

export interface Species {
  name: string;
  image: string;
}

// Ensure Cloudinary is configured with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const getSpecies = async (): Promise<Species[]> => {
  try {
    // Check if credentials are set (in case of local development without .env)
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      console.warn(
        "Cloudinary credentials missing. Falling back to default species."
      );
      return getDefaultSpecies();
    }

    // Fetch images from the 'species_of_interest' folder
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "species_of_interest/", // The folder name you created
      max_results: 50,
    });

    if (!result.resources || result.resources.length === 0) {
      console.warn("No images found in Cloudinary folder 'species_of_interest'.");
      return getDefaultSpecies();
    }

    const speciesList: Species[] = result.resources.map((resource: any) => {
      // Get the filename without the folder path
      // e.g., "species_of_interest/Tiger" -> "Tiger"
      const publicIdParts = resource.public_id.split("/");
      const rawName = publicIdParts[publicIdParts.length - 1];

      // Format the name: "snow_leopard" -> "Snow Leopard", "Tiger" -> "Tiger"
      const formattedName = rawName
        .split(/[_-]/) // split by underscore or dash
        .map(
          (word: string) =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");

      return {
        name: formattedName,
        image: resource.secure_url,
      };
    });

    return speciesList;
  } catch (error) {
    console.error("Error fetching species from Cloudinary:", error);
    // Return default hardcoded data as a fallback if the API call fails
    return getDefaultSpecies();
  }
};

function getDefaultSpecies(): Species[] {
  return [
    {
      name: "Tiger",
      image: "https://placehold.co/300x300/2f855a/white?text=Tiger",
    },
    {
      name: "Leopard",
      image: "https://placehold.co/300x300/d69e2e/white?text=Leopard",
    },
    {
      name: "Elephant",
      image: "https://placehold.co/300x300/4a5568/white?text=Elephant",
    },
    {
      name: "Dhole",
      image: "https://placehold.co/300x300/c53030/white?text=Dhole",
    },
    {
      name: "Gaur",
      image: "https://placehold.co/300x300/718096/white?text=Gaur",
    },
    {
      name: "Sambar",
      image: "https://placehold.co/300x300/ed8936/white?text=Sambar",
    },
  ];
}
