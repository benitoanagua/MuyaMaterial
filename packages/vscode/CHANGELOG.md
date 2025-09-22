# Change Log

All notable changes to the "muya-material" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.2.0] - 2024-09-13

### 🎨 Major: Dual Color Personality System

#### Added

- **Olive Collection**: New earthy green-based themes inspired by Mediterranean landscapes
  - Olive Dark: Natural, grounded dark theme with `#7D944C` seed color
  - Olive Light: Fresh, harmonious light theme with natural tones
- **Mystic Collection**: New sophisticated purple-based themes with an air of mystery
  - Mystic Dark: Elegant, mystical dark theme with `#6B5693` seed color
  - Mystic Light: Refined, magical light theme with subtle purple aesthetics

#### Changed

- **Breaking**: Renamed all theme variants for better clarity and organization
  - `material-black.json` → `olive-dark.json`
  - `material-dark.json` → `mystic-dark.json`
  - `material-light.json` → `olive-light.json`
  - `material-soft.json` → `mystic-light.json`
- Enhanced theme configuration system to support multiple seed colors
- Improved Material Design 3 color generation with dual palette support
- Updated package.json to reflect new theme naming convention

#### Technical Improvements

- Refactored `theme-config.js` to support `seedColorDefault` and `seedColorComplement`
- Enhanced `dynamic-scheme.js` with `getSeedColor()` function for color selection
- Modified `theme-builder.js` to handle `seedColorType` parameter
- Updated build system to generate themes with appropriate seed colors

#### Documentation

- Completely redesigned README.md with new theme previews
- Added visual theme gallery with actual screenshots
- Enhanced installation and usage instructions
- Expanded development documentation with new architecture details

### Enhanced

- Improved accessibility and contrast ratios across all variants
- Better semantic highlighting with meaningful color associations
- More balanced color relationships using Material Design 3 principles

## [0.1.2] - 2024-09-09

### Added

- Initial marketplace release
- Four theme variants: Material Black, Material Dark, Material Light, Material Soft
- Material Design 3 color system integration
- Dynamic color scheme generation
- Comprehensive syntax highlighting support

### Features

- Single seed color system with `#7D944C` (earthy green)
- WCAG-compliant accessibility standards
- Semantic highlighting support
- Cross-platform compatibility

### Development

- Established build system with Node.js
- Implemented automated theme generation
- Added testing infrastructure with Vitest
- Set up continuous integration workflow

### Documentation

- Created comprehensive README.md
- Added installation and usage guides
- Established contributing guidelines
- Set up issue templates

## [0.1.1] - 2024-09-08

### Fixed

- Minor color adjustments for better readability
- Improved contrast ratios in light themes
- Fixed syntax highlighting inconsistencies

## [0.1.0] - 2024-09-08

### Added

- Initial pre-release version
- Basic theme structure and configuration
- Material Design 3 foundation
- Core color palette implementation

---

## Legend

- 🎨 **Major**: Significant visual or architectural changes
- ✨ **Added**: New features or capabilities
- 🔄 **Changed**: Modifications to existing functionality
- 🐛 **Fixed**: Bug fixes and corrections
- 🗑️ **Removed**: Deprecated or removed features
- 🔒 **Security**: Security-related changes
- ⚡ **Performance**: Performance improvements
