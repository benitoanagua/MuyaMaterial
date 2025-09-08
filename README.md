# Muya Material Theme

<p align="center">
  <img src="https://img.shields.io/badge/VS%20Code-Theme-007ACC?style=for-the-badge&logo=visual-studio-code" alt="VSCode Theme">
  <img src="https://img.shields.io/badge/Material%20Design-3-757575?style=for-the-badge&logo=material-design" alt="Material Design 3">
  <img src="https://img.shields.io/badge/Version-0.1.0-FF6D00?style=for-the-badge" alt="Version 0.1.0">
  <img src="https://img.shields.io/visual-studio-marketplace/v/benitoanagua.muya-material?style=for-the-badge" alt="Marketplace Version">
</p>

**Muya Material** is a Visual Studio Code theme that combines Material Design principles with carefully curated color harmonies. The name "Muya" represents the theme's focus on balanced, organic color relationships.

> 🚧 **Pre-Release Notice**: This is an initial pre-release version (v0.1.0). Features and color schemes may evolve as we continue refining the visual experience.

## Theme Preview

### Muya Material Black

![Muya Material Black Theme](https://files.catbox.moe/82oqu3.png)

- **UI Theme**: `vs-dark`
- **Description**: High-contrast dark theme for maximum readability

### Muya Material Dark

![Muya Material Dark Theme](https://files.catbox.moe/wvhiqs.png)

- **UI Theme**: `vs-dark`
- **Description**: Standard dark variant with balanced Material Design aesthetics

### Muya Material Light

![Muya Material Light Theme](https://files.catbox.moe/d16d2u.png)

- **UI Theme**: `vs`
- **Description**: Light theme with carefully calibrated color relationships

### Muya Material Soft

![Muya Material Soft Theme](https://files.catbox.moe/rfmfpl.png)

- **UI Theme**: `vs`
- **Description**: Low-contrast light variant for comfortable extended use

## Installation

### From Visual Studio Code Marketplace

The theme is now available on the Visual Studio Code Marketplace!

**Quick Install:**

1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Muya Material"
4. Click Install

**Direct Link:**
[Install Muya Material Theme](https://marketplace.visualstudio.com/items?itemName=benitoanagua.muya-material)

**Command Line:**

```bash
code --install-extension benitoanagua.muya-material
```

### Manual Installation

1. Download the latest `.vsix` package from [Releases](../../releases)
2. In VSCode, navigate to `Extensions` → `...` → `Install from VSIX`
3. Select the downloaded file to install the theme

## Activation

After installation, activate the theme by:

1. Press `Ctrl+K Ctrl+T` (Windows/Linux) or `Cmd+K Cmd+T` (Mac)
2. Select one of the Muya Material variants from the theme picker
3. Enjoy your new coding environment!

## Development Setup

```bash
# Clone the repository
git clone https://github.com/benitoanagua/MuyaMaterial.git
cd MuyaMaterial

# Install dependencies
pnpm install

# Build the themes
pnpm run build

# Generated themes will be available in the 'themes/' directory
```

## Development Tools

### Prerequisites

- Node.js 16+
- pnpm (recommended) or npm

### Available Commands

```bash
# Install dependencies
pnpm install

# Build all theme variants
pnpm run build

# Development mode (build + watch)
pnpm run dev

# Run tests
pnpm test

# Package for distribution
pnpm run package

# Publish to Marketplace (requires vsce)
pnpm run publish:pre
```

### Project Structure

```
muya-material/
├── src/
│   ├── theme/
│   │   ├── theme-config.js      # Theme configuration and variants
│   │   ├── dynamic-scheme.js    # Dynamic color scheme generation
│   │   └── theme-builder.js     # Theme assembly logic
│   └── index.js                 # Main entry point
├── themes/                      # Generated theme files
├── test/                        # Test files
└── package.json
```

### Color System

The theme uses Material Design 3 principles with:

- **Seed Color**: `#7D944C` (Complementary green-based palette)
- **Variant**: Fidelity (accurate color representation)
- **Dynamic Schemes**: Automatically generated light and dark variants
- **Accessibility**: WCAG-compliant contrast ratios

## Testing

```bash
# Run test suite
pnpm test

# Preview theme variations during development
```

## Publishing

To create and publish new versions:

```bash
# Package for distribution
pnpm run package

# Publish pre-release version
pnpm run publish:pre

# Publish stable version (when ready)
pnpm run publish
```

## Contributing

We welcome contributions! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## Changelog

### v0.1.0 (Pre-Release)

- Initial public release
- Four theme variants: Black, Dark, Light, Soft
- Material Design 3 color system implementation
- Complementary color harmony based on seed color #7D944C

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Google Material Design Team** for the design system foundation
- **VSCode Team** for the extensible theming framework
- **Material Color Utilities** for the color algorithm implementations

## Support

If you encounter issues or have questions:

1. Check existing [Issues](https://github.com/benitoanagua/MuyaMaterial/issues)
2. Create a new issue with detailed information
3. Include your VSCode version and environment details

**Marketplace Page**: [Muya Material on VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=benitoanagua.muya-material)

---

<p align="center">
Created with ❤️ by <a href="https://github.com/benitoanagua">Benito Anagua</a>
</p>

<p align="center">
<em>Bringing Material Design harmony to code editing</em>
</p>
