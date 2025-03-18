const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

async function generateIcons() {
  try {
    // Create the icons directory if it doesn't exist
    const iconsDir = path.join(__dirname, "../public/icons");
    try {
      await fs.mkdir(iconsDir, { recursive: true });
    } catch (err) {
      if (err.code !== "EEXIST") throw err;
    }

    // Source logo path (adjust this to point to your logo file)
    const sourceLogoPath = path.join(__dirname, "../public/logo.svg");

    // Read the SVG file
    const svgBuffer = await fs.readFile(sourceLogoPath);

    // Icon sizes needed for the PWA
    const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

    // Generate each icon size
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(iconsDir, `icon-${size}x${size}.png`));

      console.log(`Generated icon-${size}x${size}.png`);
    }

    // Generate Apple touch icon (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(iconsDir, "apple-touch-icon.png"));

    console.log("Generated apple-touch-icon.png");

    // Generate maskable icon (should have padding around the logo)
    await sharp(svgBuffer)
      .resize(512, 512, {
        fit: "contain",
        background: { r: 18, g: 145, b: 55, alpha: 1 }, // Background color matching your theme
      })
      .png()
      .toFile(path.join(iconsDir, "maskable-icon.png"));

    console.log("Generated maskable-icon.png");

    console.log("All icons generated successfully!");
  } catch (error) {
    console.error("Error generating icons:", error);
  }
}

generateIcons();
