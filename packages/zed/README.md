# Muya Material for Zed

<p align="center">
  <img src="https://img.shields.io/badge/Zed-Editor-000000?style=for-the-badge&logo=zed" alt="Zed Editor">
  <img src="https://img.shields.io/badge/Material%20Design-3-757575?style=for-the-badge&logo=material-design" alt="Material Design 3">
  <img src="https://img.shields.io/badge/Version-0.2.0-FF6D00?style=for-the-badge" alt="Version 0.2.0">
</p>

A sophisticated Material Design 3 theme for Zed editor, featuring carefully crafted color personalities with optimal contrast and visual hierarchy. Part of the [Muya Material Theme Suite](https://github.com/benitoanagua/MuyaMaterial).

## Theme Preview

### Dark Themes

| Olive Dark                                              | Mystic Dark                                               |
| ------------------------------------------------------- | --------------------------------------------------------- |
| ![Olive Dark](https://i.ibb.co/p6Svr7wp/olive-dark.png) | ![Mystic Dark](https://i.ibb.co/mFJvcTbZ/mystic-dark.png) |

### Light Themes

| Olive Light                                               | Mystic Light                                                |
| --------------------------------------------------------- | ----------------------------------------------------------- |
| ![Olive Light](https://i.ibb.co/SDDH6c15/olive-light.png) | ![Mystic Light](https://i.ibb.co/fdj61Khy/mystic-light.png) |

## Features

### Enhanced Visual Hierarchy

- **Bright Editor Area**: Optimal code readability with maximum contrast
- **Darker Sidebars**: Reduced distractions for better focus
- **Clear Navigation**: Intuitive tab and panel organization

### Material Design 3 Compliance

- Full semantic color system implementation
- Proper elevation hierarchy with surface containers
- Dynamic color schemes for light/dark modes

### Advanced Syntax Highlighting

- Semantic token coloring based on meaning
- Enhanced font weights for better readability
- Distinct differentiation between language constructs

### Zed-Specific Optimizations

- Collaborative editing support with player colors
- Terminal integration with Material Design ANSI colors
- Modern UI components theming

## Installation

### Manual Installation

1. **Download Themes**: Build from source or download from releases
2. **Copy to Themes Directory**:

**macOS**

```bash
cp themes/*.json ~/Library/Application\ Support/Zed/themes/
```

**Linux**

```bash
cp themes/*.json ~/.config/zed/themes/
```

**Windows**

```powershell
Copy-Item themes/*.json $env:APPDATA\Zed\themes\
```

3. **Activate Theme**:
   - Open Zed Settings (`Cmd+,` / `Ctrl+,`)
   - Navigate to Themes
   - Select your preferred Muya Material variant

### Using Theme Family (Recommended)

The `muya-material-family.json` includes all variants for seamless switching between light and dark modes based on system preferences.

## Color Personalities

### 🌿 Olive Collection

- **Seed Color**: `#7D944C` (Earthy green)
- **Vibe**: Natural, grounded, organic
- **Best for**: Long coding sessions, reduced eye strain

### 🔮 Mystic Collection

- **Seed Color**: `#6B5693` (Sophisticated purple)
- **Vibe**: Elegant, mystical, refined
- **Best for**: Focused work, visual clarity

##Project Structure

```
packages/zed/
├── src/
│   ├── theme/
│   │   ├── colors/           # Color mapping system
│   │   ├── syntax/           # Syntax highlighting rules
│   │   ├── zed-colors-mapper.js
│   │   ├── zed-syntax-mapper.js
│   │   └── zed-theme-builder.js
│   └── index.js             # Main build script
├── themes/                  # Generated theme files
├── package.json
└── README.md
```

## Development

### Prerequisites

- Node.js 16+
- Zed editor (for testing)

### Build Commands

From the monorepo root:

```bash
# Build all packages
npm run build

# Build only Zed themes
npm run build:zed

# Development mode with file watching
npm run dev
```

From the Zed package directory:

```bash
cd packages/zed
npm run build
```

### Generated Theme Files

After building, you'll find these theme files in the `themes/` directory:

- `muya-material-olive-dark.json`
- `muya-material-mystic-dark.json`
- `muya-material-olive-light.json`
- `muya-material-mystic-light.json`
- `muya-material-family.json` (contains all variants)

## Customization

The theme system supports custom color schemes. Key configuration points:

### Color Mapping

- Edit `src/theme/colors/` files to modify color assignments
- Adjust contrast levels in `src/theme/scheme-validator.js`

### Syntax Highlighting

- Modify token colors in `src/theme/syntax/` files
- Adjust font weights and styles for different token types

## License

MIT License - see the main project [LICENSE](../LICENSE) file for details.

## Links

- [Main Project Repository](https://github.com/benitoanagua/MuyaMaterial)
- [Zed Editor Website](https://zed.dev)
- [Material Design 3 Guidelines](https://m3.material.io)

---

<div align="center">

### Part of the [Muya Material Theme Suite](https://github.com/benitoanagua/MuyaMaterial)

**Choose Your Vibe: 🌿 Earthy Olive or 🔮 Mystical Purple**

</div>
