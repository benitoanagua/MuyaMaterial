# Muya Material

<p align="center">
  <img src="https://img.shields.io/badge/VS%20Code-Theme-007ACC?style=for-the-badge&logo=visual-studio-code" alt="VSCode Theme">
  <img src="https://img.shields.io/badge/Material%20Design-3-757575?style=for-the-badge&logo=material-design" alt="Material Design 3">
  <img src="https://img.shields.io/badge/Type-ESM-3178C6?style=for-the-badge&logo=typescript" alt="ES Modules">
</p>

**Muya Material** is a harmonious Visual Studio Code theme that blends the organic beauty of nature with the precision of modern design. The name "Muya" (from Quechua, meaning "garden" or "orchard") combined with "Material" creates "Garden Material" - representing themes that grow and evolve naturally, just like plants in a well-tended garden.

### From Marketplace (Coming Soon)

```bash
# Once our garden grows to the Marketplace
ext install muya-material
```

### Manual

1. Download the latest `.vsix` package from Releases
2. In VSCode, navigate to `Extensions` → `...` → `Install from VSIX`
3. Select the downloaded file to plant the theme

### Development

```bash
# Clone the repository garden
git clone https://github.com/benitoanagua/MuyaMaterial.git
cd MuyaMaterial

# Plant the dependencies
pnpm install

# Cultivate the themes
pnpm run build

# Themes will bloom in the 'themes/' directory
```

## Variants

### Muya Material Black

- **UI Theme**: `vs-dark`
- **Description**: Deep garden soil with maximum contrast for comfortable viewing

### Muya Material Dark

- **UI Theme**: `vs-dark`
- **Description**: Balanced twilight garden with natural Material Design aesthetics

### Muya Material Light

- **UI Theme**: `vs`
- **Description**: Morning garden light with organic color accents

### Muya Material Soft

- **UI Theme**: `vs`
- **Description**: Cultivated clarity with enhanced contrast for optimal growth

## 🛠 Tools

### Prerequisites

- Node.js 16+
- pnpm (recommended) or npm

### Commands

```bash
# Plant dependencies
pnpm install

# Cultivate all theme variants
pnpm run build

# Development greenhouse (build + test)
pnpm run dev

# Test the garden's health
pnpm test

# Package the harvest
pnpm run package
```

### Structure

```
muya-material/
├── src/
│   ├── theme/
│   │   ├── colors/          # Natural color definitions
│   │   ├── scopes/          # Syntax gardening tools
│   │   ├── theme-config.js  # Garden configuration
│   │   ├── dynamic-scheme.js # Natural color cultivation
│   │   └── theme-builder.js # Theme assembly greenhouse
│   └── index.js            # Main garden entrance
├── themes/                 # Blooming theme flowers
├── test/                   # Garden health checks
└── package.json
```

### Color System

Our garden uses organic color principles with:

- **Seed Color**: `#6750A4` (Natural purple blossom)
- **Variant**: Tonal Spot (2) - like carefully placed garden elements
- **Natural Contrast**: Organic adjustments following WCAG guidelines

## Testing

```bash
# Test the garden's color harmony
pnpm test

# Watch the natural color schemes bloom in preview
```

## Packaging

To prepare your garden's harvest for distribution:

```bash
pnpm run package
```

The harvest will be packaged as: `muya-material-{version}.vsix`

## Community

We welcome fellow gardeners! Feel free to plant new ideas, report issues, or contribute to our growing ecosystem.

1. Fork our garden repository
2. Create a feature branch (`git checkout -b feature/new-blossom`)
3. Commit your changes (`git commit -m 'Add new garden feature'`)
4. Push to the branch (`git push origin feature/new-blossom`)
5. Open a Pull Request to share your harvest

## License

This project grows under the MIT License - see the [LICENSE](LICENSE) file for cultivation details.

## Acknowledgments

- **Google Material Design Team** for the fertile design soil
- **VSCode Team** for the excellent gardening framework
- **Material Color Utilities** for the natural color cultivation algorithms
- **Quechua culture** for the beautiful inspiration behind "Muya"

## Support

If your garden needs tending or you have questions:

1. Check our [Garden Issues](https://github.com/benitoanagua/MuyaMaterial/issues)
2. Plant a new issue with detailed information
3. Include your VSCode version and growing environment details

---

<p align="center">
Cultivated with ❤️ by <a href="https://github.com/benitoanagua">Benito Anagua</a>
</p>

<p align="center">
<em>Where code meets nature's harmony</em>
</p>
