# Muya Material Theme

<p align="center">
  <img src="https://img.shields.io/badge/VS%20Code-Theme-007ACC?style=for-the-badge&logo=visual-studio-code" alt="VSCode Theme">
  <img src="https://img.shields.io/badge/Material%20Design-3-757575?style=for-the-badge&logo=material-design" alt="Material Design 3">
  <img src="https://img.shields.io/badge/Version-0.2.0-FF6D00?style=for-the-badge" alt="Version 0.2.0">
  <img src="https://img.shields.io/visual-studio-marketplace/v/benitoanagua.muya-material?style=for-the-badge" alt="Marketplace Version">
</p>

**Muya Material** is a Visual Studio Code theme that combines Material Design 3 principles with carefully curated color harmonies inspired by nature's organic tones. The name "Muya" represents the theme's focus on balanced, earth-inspired color relationships with two distinct personalities: **Olive** and **Mystic**.

## Theme Variants

Experience two unique color personalities, each available in light and dark variants:

### Olive Collection

**Earthy, natural tones inspired by Mediterranean landscapes**

#### Olive Dark

![Olive Dark Theme](https://i.ibb.co/mCtKzmzx/olive-dark.png)

#### Olive Light

![Olive Light Theme](https://i.ibb.co/MkQm67td/olive-light.png)

### Mystic Collection

**Sophisticated purple tones with an air of mystery and elegance**

#### Mystic Dark

![Mystic Dark Theme](https://i.ibb.co/D6r5m2m/mystic-dark.png)

#### Mystic Light

![Mystic Light Theme - Preview](https://i.ibb.co/Y4yYthjG/olive-mystic.png)

## Features

- **Dual Color Personalities**: Choose between earthy Olive or mystical Purple aesthetics
- **Material Design 3**: Built with Google's latest design system principles
- **Dynamic Color Generation**: Scientifically balanced color relationships
- **Accessibility Focused**: WCAG-compliant contrast ratios for comfortable coding
- **Semantic Highlighting**: Enhanced code readability with meaningful color associations

## Installation

### From Visual Studio Code Marketplace

**Quick Install:**

1. Open Visual Studio Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
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

After installation, activate your preferred theme:

1. Press `Ctrl+K Ctrl+T` (Windows/Linux) or `Cmd+K Cmd+T` (Mac)
2. Select from the available options:
   - **Muya Material - Olive Dark**
   - **Muya Material - Olive Light**
   - **Muya Material - Mystic Dark**
   - **Muya Material - Mystic Light**
3. Enjoy your personalized coding environment!

## Development Setup

```bash
# Clone the repository
git clone https://github.com/benitoanagua/MuyaMaterial.git
cd MuyaMaterial

# Install dependencies
npm install

# Build all theme variants
npm run build

# Generated themes will be available in the 'themes/' directory
```

## Development Tools

### Prerequisites

- Node.js 16+
- npm or pnpm

### Available Commands

```bash
# Install dependencies
npm install

# Build all theme variants
npm run build

# Development mode (build + watch)
npm run dev

# Run tests
npm test

# Package for distribution
npm run package

# Watch for changes during development
npm run watch
```

### Project Structure

```
muya-material/
├── src/
│   ├── theme/
│   │   ├── theme-config.js      # Theme configuration and color definitions
│   │   ├── dynamic-scheme.js    # Dynamic color scheme generation
│   │   ├── theme-builder.js     # Theme assembly logic
│   │   ├── colors/              # UI color definitions
│   │   └── scopes/              # Syntax highlighting rules
│   └── index.js                 # Main entry point
├── themes/                      # Generated theme files
├── test/                        # Test files
└── package.json
```

### Color System

The theme leverages Material Design 3's dynamic color system with two seed colors:

- **Olive Seed**: `#7D944C` - Earthy green representing natural growth and stability
- **Mystic Seed**: `#6B5693` - Muted purple evoking sophistication and mystery
- **Variant**: Fidelity (accurate color representation)
- **Dynamic Schemes**: Automatically generated light and dark variants
- **Accessibility**: WCAG-compliant contrast ratios across all variants

## Testing

```bash
# Run test suite
npm test

# Watch tests during development
npm run watch:test
```

## Publishing

To create and publish new versions:

```bash
# Package for distribution
npm run package

# This creates a .vsix file ready for publishing
```

## Contributing

We welcome contributions! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code structure and naming conventions
- Test your changes across all theme variants
- Update documentation if you add new features
- Ensure accessibility standards are maintained

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Google Material Design Team** for the Material Design 3 foundation
- **VSCode Team** for the extensible theming framework
- **Material Color Utilities** for advanced color algorithm implementations
- **Community** for feedback and inspiration

## Support

If you encounter issues or have suggestions:

1. Check existing [Issues](https://github.com/benitoanagua/MuyaMaterial/issues)
2. Create a new issue with detailed information
3. Include your VSCode version and environment details

**Marketplace Page**: [Muya Material on VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=benitoanagua.muya-material)

---

<p align="center">
Created with ❤️ by <a href="https://github.com/benitoanagua">Benito Anagua</a>
</p>
