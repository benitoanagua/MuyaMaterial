# Muya Material Theme

<p align="center">
  <img src="https://img.shields.io/badge/VS%20Code-Theme-007ACC?style=for-the-badge&logo=visual-studio-code" alt="VSCode Theme">
  <img src="https://img.shields.io/badge/Material%20Design-3-757575?style=for-the-badge&logo=material-design" alt="Material Design 3">
  <img src="https://img.shields.io/badge/Type-ESM-3178C6?style=for-the-badge&logo=typescript" alt="ES Modules">
</p>

**Muya Material** is a Visual Studio Code theme that combines Material Design principles with carefully curated color harmonies. The name "Muya" represents the theme's focus on balanced, organic color relationships.

> ⚠️ **Work in Progress**: This theme is currently under active development. Features and color schemes may change as we refine the visual experience.

## Installation

### From Marketplace (Coming Soon)

```bash
# Once available on the Marketplace
ext install muya-material
```

### Manual Installation

1. Download the latest `.vsix` package from Releases
2. In VSCode, navigate to `Extensions` → `...` → `Install from VSIX`
3. Select the downloaded file to install the theme

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

## Theme Variants

### Muya Material Black

- **UI Theme**: `vs-dark`
- **Description**: High-contrast dark theme for maximum readability

### Muya Material Dark

- **UI Theme**: `vs-dark`
- **Description**: Standard dark variant with balanced Material Design aesthetics

### Muya Material Light

- **UI Theme**: `vs`
- **Description**: Light theme with carefully calibrated color relationships

### Muya Material Soft

- **UI Theme**: `vs`
- **Description**: Low-contrast light variant for comfortable extended use

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

## Packaging

To create a distribution package:

```bash
pnpm run package
```

This will generate: `muya-material-{version}.vsix`

## Contributing

We welcome contributions! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

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

---

<p align="center">
Created with ❤️ by <a href="https://github.com/benitoanagua">Benito Anagua</a>
</p>

<p align="center">
<em>Bringing Material Design harmony to code editing</em>
</p>
