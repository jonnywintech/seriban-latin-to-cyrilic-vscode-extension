# Serbian Latin to Cyrillic Converter for VS Code

A Visual Studio Code extension that converts Serbian Latin text to Cyrillic script.

## Features

- Convert selected Serbian Latin text to Cyrillic
- Preserves case sensitivity
- Handles special Serbian characters (đ, ž, č, ć, š)
- Properly converts digraphs (lj → љ, nj → њ, dž → џ)

## Installation

You can install this extension in one of two ways:

1. **Through VSIX file**:
   - Download the `.vsix` file
   - Open VS Code
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
   - Type "Install from VSIX" and select it
   - Navigate to the downloaded `.vsix` file and select it

2. **Through VS Code Marketplace**:
   - Open VS Code
   - Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
   - Search for "Serbian Latin to Cyrillic Converter"
   - Click Install

## Usage

1. Select the text you want to convert
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the Command Palette
3. Type "Convert to Serbian Cyrillic" and select the command
4. The selected text will be converted to Cyrillic script

### Example

```
Latin: Dobro jutro → Cyrillic: Добро јутро
```

## Supported Conversions

### Single Characters
- a → а
- b → б
- v → в
- g → г
- d → д
- đ → ђ
- e → е
- ž → ж
- z → з
- i → и
- j → ј
- k → к
- l → л
- m → м
- n → н
- o → о
- p → п
- r → р
- s → с
- t → т
- ć → ћ
- u → у
- f → ф
- h → х
- c → ц
- č → ч
- š → ш

### Digraphs
- lj → љ
- nj → њ
- dž → џ

## Requirements

- VS Code version 1.74.0 or higher

## Known Issues

- None currently reported

## Contributing

If you'd like to contribute to this extension, please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

This extension is licensed under the MIT License.

## Release Notes

### 0.0.1
- Initial release
- Basic Latin to Cyrillic conversion functionality

---

**Enjoy!**