# Aguayo Accent - VSCode Theme

<p align="center">
  <img src="https://img.shields.io/badge/VS%20Code-Theme-007ACC?style=for-the-badge&logo=visual-studio-code" alt="VSCode Theme">
  <img src="https://img.shields.io/badge/Material%20Design-3-757575?style=for-the-badge&logo=material-design" alt="Material Design 3">
  <img src="https://img.shields.io/badge/Type-ESM-3178C6?style=for-the-badge&logo=typescript" alt="ES Modules">
</p>

A modern Visual Studio Code theme inspired by **Material Design 3** with a sophisticated color palette based on the beautiful **Aguayo** aesthetic. This theme provides a harmonious and productive coding experience across both light and dark variants.

## 🎨 Features

- **Material Design 3 Compliance**: Fully implements Google's Material Design 3 color system
- **Multiple Variants**: Four carefully crafted variants for different preferences:
  - **Black (High Contrast)**: Deep dark theme with enhanced contrast
  - **Dark**: Standard dark theme with balanced colors
  - **Light**: Clean light theme for daytime coding
  - **Soft (High Contrast)**: Light theme with improved contrast
- **Semantic Highlighting**: Advanced syntax highlighting with semantic understanding
- **Comprehensive Coverage**: Full support for all VSCode UI elements and syntax scopes

## 🚀 Installation

### From Marketplace (Coming Soon)

```bash
# Once published to VS Code Marketplace
ext install aguayo-accent
```

### Manual Installation

1. Download the latest `.vsix` package from Releases
2. In VSCode, go to `Extensions` → `...` → `Install from VSIX`
3. Select the downloaded file

### Development Build

```bash
# Clone the repository
git clone https://github.com/benitoanagua/AguayoAccent.git
cd AguayoAccent

# Install dependencies
pnpm install

# Build the themes
pnpm run build

# The themes will be generated in the 'themes/' directory
```

## 🎯 Variants

### Aguayo Accent Black

- **UI Theme**: `vs-dark`
- **Description**: Ultra-dark theme with maximum contrast for reduced eye strain

### Aguayo Accent Dark

- **UI Theme**: `vs-dark`
- **Description**: Balanced dark theme with Material Design 3 aesthetics

### Aguayo Accent Light

- **UI Theme**: `vs`
- **Description**: Clean light theme with subtle color accents

### Aguayo Accent Soft

- **UI Theme**: `vs`
- **Description**: Light theme with enhanced contrast for better readability

## 🛠 Development

### Prerequisites

- Node.js 16+
- pnpm (recommended) or npm

### Building Themes

```bash
# Install dependencies
pnpm install

# Generate all theme variants
pnpm run build

# Development mode (build + test)
pnpm run dev

# Run tests
pnpm test

# Create VSIX package
pnpm run package
```

### Project Structure

```
aguayo-accent/
├── src/
│   ├── theme/
│   │   ├── colors/          # VSCode UI color definitions
│   │   ├── scopes/          # Syntax highlighting scopes
│   │   ├── theme-config.js  # Theme configuration
│   │   ├── dynamic-scheme.js # MD3 color scheme generator
│   │   └── theme-builder.js # Theme assembly logic
│   └── index.js            # Main entry point
├── themes/                 # Generated theme files
├── test/                   # Test files
└── package.json
```

### Color System

The theme uses Material Design 3's dynamic color system with:

- **Seed Color**: `#6750A4`
- **Variant**: Tonal Spot (2)
- **Automatic Contrast Adjustment**: Based on WCAG guidelines

## 🧪 Testing

```bash
# Run color scheme tests
pnpm test

# Test output shows color contrast validation and scheme previews
```

## 📦 Packaging

To create a distributable VSIX package:

```bash
pnpm run package
```

The package will be created in the root directory with naming pattern: `aguayo-accent-{version}.vsix`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Material Design Team** for the Material Design 3 specification
- **VSCode Team** for the excellent theming system
- **Material Color Utilities** for the color generation algorithms

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/benitoanagua/AguayoAccent/issues) page
2. Create a new issue with detailed information
3. Include your VSCode version and OS information

---

<p align="center">
Made with ❤️ by <a href="https://github.com/benitoanagua">Benito Anagua</a>
</p>
