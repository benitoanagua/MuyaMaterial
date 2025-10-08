# Muya Material Theme Suite

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

**[VS Code Documentation](./packages/vscode/README.md)**

#### Zed Editor

**Features:**

- Optimized for Zed's modern UI
- Collaborative editing support
- Advanced syntax highlighting
- Player colors for real-time collaboration
- v0.2.0 schema compatible

**Installation:**

```bash
# Build themes first
pnpm build:zed

# Copy to Zed themes directory
cp packages/zed/themes/*.json ~/Library/Application\ Support/Zed/themes/

# In Zed: Open Command Palette → "Change Color Theme" → Select Muya Material variant
```

**[Zed Documentation](./packages/zed/README.md)**

### Terminal & Multiplexers

#### Alacritty Terminal

**Features:**

- Complete 16-color palette support with normal, bright, and dim variants
- Strict TOML validation using `@iarna/toml` library
- No alpha channel - all colors are solid `#RRGGBB` format
- Search and selection theming with proper contrast
- Cursor and vi-mode colors optimized for visibility

**Installation:**

```bash
# Build themes first
pnpm build:alacritty

# Import in alacritty.toml
import = ['~/.config/alacritty/themes/muya-material-olive-dark.toml']

# Or copy themes to config directory
cp packages/alacritty/themes/*.toml ~/.config/alacritty/themes/
```

**[Alacritty Documentation](./packages/alacritty/README.md)**

#### Zellij Terminal Multiplexer

**Features:**

- Complete UI component coverage
- Multiplayer session colors
- Pane and tab theming
- Status bar integration
- KDL format support

**Installation:**

```bash
# Build themes first
pnpm build:zellij

# Copy to Zellij themes directory
cp packages/zellij/themes/*.kdl ~/.config/zellij/themes/

# Start session with theme
zellij --theme muya-material-olive-dark

# Or set in config file: theme "muya-material-olive-dark"
```

**[Zellij Documentation](./packages/zellij/README.md)**

## Quick Start

### Prerequisites

- **Node.js 18+**
- **pnpm** (recommended for reliable builds) or npm

### Installation & Build

```bash
# Clone the repository
git clone https://github.com/benitoanagua/MuyaMaterial.git
cd MuyaMaterial

# Install dependencies with pnpm (recommended)
pnpm install

# Or with npm
npm install

# Build all themes
pnpm build

# Or build specific packages
pnpm build:vscode
pnpm build:zed
pnpm build:zellij
pnpm build:alacritty

# Development mode with file watching
pnpm dev
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

1. Build themes: `pnpm build:zed`
2. Copy generated JSON files to Zed themes directory
3. Restart Zed and select theme from settings

### Alacritty

1. Build themes: `pnpm build:alacritty`
2. Import theme in your `alacritty.toml` or copy theme files
3. Restart Alacritty to apply changes

### Zellij

1. Build themes: `pnpm build:zellij`
2. Copy KDL files to Zellij themes directory
3. Use theme in Zellij config or start session with theme flag

## Color System Architecture

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
4. Add comprehensive documentation
5. Submit Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- **Google Material Design Team** for the Material Design 3 foundation
- **VS Code Team** for the extensible theming framework
- **Zed Team** for the modern editor architecture
- **Alacritty Team** for the high-performance terminal
- **Zellij Team** for the powerful terminal multiplexer
- **Material Color Utilities** for advanced color algorithms
- **Community** for feedback, testing, and inspiration

---

Made with ❤️ by [Benito Anagua](https://github.com/benitoanagua)
