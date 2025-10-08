# Muya Material Theme Suite

<p align="center">
  <img src="https://img.shields.io/badge/Multi%20Editor-Themes-FF6D00?style=for-the-badge" alt="Multi-Editor Themes">
  <img src="https://img.shields.io/badge/Material%20Design-3-757575?style=for-the-badge&logo=material-design" alt="Material Design 3">
  <img src="https://img.shields.io/badge/Version-1.0.0-FF6D00?style=for-the-badge" alt="Version 1.0.0">
</p>

**Muya Material** is a comprehensive theme suite that brings Material Design 3 principles to your entire development workflow. Experience consistent, beautiful theming across all your favorite tools with carefully curated color harmonies inspired by nature's organic tones.

## Features

- **Unified Design System**: Consistent Material Design 3 experience everywhere
- **Dual Color Personalities**: Choose between earthy Olive or mystical Purple aesthetics
- **Cross-Platform Support**: Themes for editors, IDEs, and terminal tools
- **Dynamic Color Generation**: Scientifically balanced color relationships
- **Accessibility Focused**: WCAG-compliant contrast ratios across all platforms
- **Semantic Highlighting**: Enhanced readability with meaningful color associations

## Theme Variants

### Olive Collection

**Earthy, natural tones inspired by Mediterranean landscapes**

- **Olive Dark**: Natural, grounded dark theme with `#7D944C` seed color
- **Olive Light**: Fresh, harmonious light theme with natural tones

### Mystic Collection

**Sophisticated purple tones with an air of mystery and elegance**

- **Mystic Dark**: Elegant, mystical dark theme with `#6B5693` seed color
- **Mystic Light**: Refined, magical light theme with subtle purple aesthetics

## Supported Platforms

### Code Editors & IDEs

#### Visual Studio Code

[![VS Code Version](https://img.shields.io/visual-studio-marketplace/v/benitoanagua.muya-material?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=benitoanagua.muya-material)

**Features:**

- Four complete theme variants
- Comprehensive UI theming (400+ tokens)
- Enhanced syntax highlighting
- Integrated terminal colors
- Git decoration support

**Quick Install:**

```bash
code --install-extension benitoanagua.muya-material
```

#### Zed Editor

[![Zed Ready](https://img.shields.io/badge/Zed-Themes-000000?style=flat-square)](https://zed.dev)

**Features:**

- Optimized for Zed's modern UI
- Collaborative editing support
- Advanced syntax highlighting
- Player colors for real-time collaboration
- v0.2.0 schema compatible

**Installation:**

```bash
# Copy to Zed themes directory
cp packages/zed/themes/*.json ~/Library/Application\ Support/Zed/themes/
```

### Terminal & Multiplexers

#### Alacritty Terminal

[![Alacritty Compatible](https://img.shields.io/badge/Alacritty-Themes-F74D00?style=flat-square)](https://alacritty.org)

**Features:**

- Complete 16-color palette support with normal, bright, and dim variants
- Strict TOML validation using `@iarna/toml` library
- No alpha channel - all colors are solid `#RRGGBB` format
- Search and selection theming with proper contrast
- Cursor and vi-mode colors optimized for visibility
- Material Design 3 color relationships maintained

**Installation:**

```bash
# Import in alacritty.toml
import = ['~/.config/alacritty/themes/muya-material-olive-dark.toml']

# Or copy and use directly
cp packages/alacritty/themes/*.toml ~/.config/alacritty/themes/
```

#### Zellij Terminal Multiplexer

[![Zellij Compatible](https://img.shields.io/badge/Zellij-Themes-FF6D00?style=flat-square)](https://zellij.dev)

**Features:**

- Complete UI component coverage
- Multiplayer session colors
- Pane and tab theming
- Status bar integration
- KDL format support

**Installation:**

```bash
# Copy to Zellij themes directory
cp packages/zellij/themes/*.kdl ~/.config/zellij/themes/
```

## Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation & Build

```bash
# Clone the repository
git clone https://github.com/benitoanagua/MuyaMaterial.git
cd MuyaMaterial

# Install dependencies
npm install

# Build all themes
npm run build

# Or build specific packages
npm run build:vscode
npm run build:zed
npm run build:zellij
npm run build:alacritty

# Development mode with file watching
npm run dev
```

### Project Structure

```
muya-material/
├── core/                 # Shared theme engine & color system
├── packages/
│   ├── vscode/          # VS Code extension package
│   ├── zed/             # Zed editor themes (v0.2.0 compatible)
│   ├── zellij/          # Zellij terminal themes (KDL format)
│   └── alacritty/       # Alacritty terminal themes (TOML format)
├── themes/              # Generated theme files
└── package.json         # Workspace configuration
```

## Usage Examples

### VS Code

1. Install from Marketplace or build locally
2. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Search "Color Theme"
4. Select any Muya Material variant

### Zed Editor

1. Build themes: `npm run build:zed`
2. Copy generated JSON files to Zed themes directory
3. Restart Zed and select theme from settings

### Alacritty

1. Build themes: `npm run build:alacritty`
2. Import in your `alacritty.toml`:

```toml
# Import theme
import = ['~/.config/alacritty/themes/muya-material-olive-dark.toml']
```

### Zellij

1. Build themes: `npm run build:zellij`
2. Copy KDL files to `~/.config/zellij/themes/`
3. Add to config: `theme "muya-material-olive-dark"`

## 🎨 Color System Architecture

The theme suite leverages a sophisticated color generation system:

```javascript
// Core color engine based on Material Design 3
const scheme = createDynamicScheme({
  isDark: true, // Light/dark mode
  contrastLevel: 0, // Accessibility levels
  seedColorType: "default", // Olive or Mystic
});
```

**Key Components:**

- **Olive Seed**: `#7D944C` - Earthy green representing natural growth
- **Mystic Seed**: `#6B5693` - Muted purple evoking sophistication
- **Variant**: Fidelity (accurate color representation)
- **Dynamic Schemes**: Automatically generated light/dark variants
- **Platform Adaptation**: Colors optimized for each tool's rendering

## Contributing

We welcome contributions to expand platform support!

**Priority Platforms:**

- JetBrains IDEs (IntelliJ, WebStorm, etc.)
- Vim/Neovim
- Emacs
- Sublime Text
- Terminal.app / iTerm2
- Windows Terminal

**Contribution Process:**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-platform`)
3. Implement platform support

4. Submit Pull Request

### Current Package Details

| Platform  | Format        | Status      | Features                           |
| --------- | ------------- | ----------- | ---------------------------------- |
| VS Code   | JSON          | ✅ Complete | 400+ tokens, semantic highlighting |
| Zed       | JSON (v0.2.0) | ✅ Complete | Syntax highlighting, player colors |
| Alacritty | TOML          | ✅ Complete | 16-color palette, validation       |
| Zellij    | KDL           | ✅ Complete | UI components, multiplayer         |

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- **Google Material Design Team** for the Material Design 3 foundation
- **VS Code Team** for the extensible theming framework
- **Zed Team** for the modern editor architecture
- **Alacritty Team** for the high-performance terminal
- **Zellij Team** for the powerful terminal multiplexer
- **Material Color Utilities** for advanced color algorithms
- **@iarna/toml** for robust TOML handling
- **Community** for feedback, testing, and inspiration

---

<p align="center">
Made with ❤️ by <a href="https://github.com/benitoanagua">Benito Anagua</a>
</p>

<div align="center">

### Consistent Material Design Experience Across Your Entire Workflow 🪄

**From code editors to terminals - one unified design language**

</div>
