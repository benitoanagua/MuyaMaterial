# Muya Material Theme Suite

<p align="center">
  <img src="https://img.shields.io/badge/Multi%20Editor-Themes-FF6D00?style=for-the-badge" alt="Multi-Editor Themes">
  <img src="https://img.shields.io/badge/Material%20Design-3-757575?style=for-the-badge&logo=material-design" alt="Material Design 3">
  <img src="https://img.shields.io/badge/Version-0.2.0-FF6D00?style=for-the-badge" alt="Version 0.2.0">
</p>

**Muya Material** is a comprehensive theme suite that brings Material Design 3 principles to your favorite code editors. Inspired by nature's organic tones, Muya Material offers carefully curated color harmonies with two distinct personalities: **Olive** (earthy greens) and **Mystic** (sophisticated purples).

## 🌟 Features

- **Dual Color Personalities**: Choose between earthy Olive or mystical Purple aesthetics
- **Material Design 3**: Built with Google's latest design system principles
- **Multi-Editor Support**: Consistent experience across different code editors
- **Dynamic Color Generation**: Scientifically balanced color relationships
- **Accessibility Focused**: WCAG-compliant contrast ratios
- **Semantic Highlighting**: Enhanced code readability with meaningful color associations

## 🎨 Theme Variants

Experience two unique color personalities, each available in light and dark variants:

### Olive Collection

**Earthy, natural tones inspired by Mediterranean landscapes**

- **Olive Dark**: Natural, grounded dark theme with `#7D944C` seed color
- **Olive Light**: Fresh, harmonious light theme with natural tones

### Mystic Collection

**Sophisticated purple tones with an air of mystery and elegance**

- **Mystic Dark**: Elegant, mystical dark theme with `#6B5693` seed color
- **Mystic Light**: Refined, magical light theme with subtle purple aesthetics

## 📦 Supported Editors

### Visual Studio Code

[![VS Code Version](https://img.shields.io/visual-studio-marketplace/v/benitoanagua.muya-material?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=benitoanagua.muya-material)

**Quick Install:**

```bash
code --install-extension benitoanagua.muya-material
```

**Features:**

- Four complete theme variants
- Comprehensive UI theming
- Enhanced syntax highlighting
- Integrated terminal colors
- Git decoration support

**[VS Code Documentation](./packages/vscode/README.md)**

### Zed Editor

[![Zed Ready](https://img.shields.io/badge/Zed-Themes-000000?style=flat-square)](https://zed.dev)

**Manual Installation:**
Copy theme files to Zed's themes directory:

- macOS: `~/Library/Application Support/Zed/themes/`
- Linux: `~/.config/zed/themes/`
- Windows: `%APPDATA%/Zed/themes/`

**Features:**

- Optimized for Zed's modern UI
- Collaborative editing support
- Advanced syntax highlighting
- Player colors for real-time collaboration

**[Zed Documentation](./packages/zed/README.md)**

## 🚀 Installation

### VS Code Marketplace

1. Open VS Code Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for "Muya Material"
3. Click Install
4. Select theme via `Ctrl+K Ctrl+T`

### Manual Installation

Download latest releases from individual package directories or build from source.

## 🛠 Development

### Prerequisites

- Node.js 16+
- npm or pnpm

### Project Structure

```
muya-material/
├── core/                 # Shared theme engine
├── packages/
│   ├── vscode/          # VS Code extension
│   └── zed/             # Zed editor themes
└── package.json         # Workspace configuration
```

### Build Commands

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Build specific packages
npm run build:vscode
npm run build:zed

# Development mode
npm run dev

# Run tests
npm test
```

### Color System

The theme leverages Material Design 3's dynamic color system:

- **Olive Seed**: `#7D944C` - Earthy green representing natural growth
- **Mystic Seed**: `#6B5693` - Muted purple evoking sophistication
- **Variant**: Fidelity (accurate color representation)
- **Dynamic Schemes**: Automatically generated light/dark variants

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Contribution Areas

- New editor support (Vim, Emacs, Sublime Text, etc.)
- Additional color variants
- Syntax highlighting improvements
- Accessibility enhancements
- Documentation improvements

## 📋 Changelog

### v0.2.0 - Dual Color Personality System

- Added Olive and Mystic color collections
- Enhanced theme configuration system
- Improved Material Design 3 implementation
- Added comprehensive documentation

### v0.1.0 - Initial Release

- Basic theme structure and configuration
- Material Design 3 foundation
- Core color palette implementation

[Full Changelog](./packages/vscode/CHANGELOG.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./packages/vscode/LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Material Design Team** for the Material Design 3 foundation
- **VS Code Team** for the extensible theming framework
- **Zed Team** for the modern editor architecture
- **Material Color Utilities** for advanced color algorithms
- **Community** for feedback and inspiration

## 🆘 Support

If you encounter issues or have suggestions:

1. Check existing [Issues](https://github.com/benitoanagua/MuyaMaterial/issues)
2. Create a new issue with detailed information
3. Include your editor version and environment details

**Project Links:**

- [GitHub Repository](https://github.com/benitoanagua/MuyaMaterial)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=benitoanagua.muya-material)
- [Issue Tracker](https://github.com/benitoanagua/MuyaMaterial/issues)

---

<p align="center">
Made with ❤️ by <a href="https://github.com/benitoanagua">Benito Anagua</a>
</p>

<div align="center">

### 🌿 Choose Your Vibe: Earthy Olive or Mystical Purple 🪄

</div>
