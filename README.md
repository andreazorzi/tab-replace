# Tab Replace

A simple VS Code extension that converts all tab characters in your documents to spaces, using your configured `editor.tabSize` setting.

## Features

- 🔄 **Smart Conversion**: Automatically uses your `editor.tabSize` setting
- 🎯 **Language Aware**: Respects language-specific tab size configurations
- ⚡ **Fast & Efficient**: Processes entire documents quickly
- 📊 **Feedback**: Shows how many tabs were converted

![Demo](images/usage.gif)

### Command Palette
1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type `Replace all tabs with spaces`
3. Press Enter

### Keyboard Shortcut
- **Windows/Linux**: `Ctrl+Shift+X`
- **macOS**: `Cmd+Shift+X`

## How It Works

The extension:
1. Reads your current `editor.tabSize` setting (defaults to 4 if not set)
2. Finds all tab characters (`\t`) in the active document
3. Replaces each tab with the appropriate number of spaces
4. Shows a confirmation message with the number of tabs converted

### Example

If your `editor.tabSize` is set to 2:
```typescript
    // Before
    function example() {
    →   →   return "hello";
    }

    // After
    function example() {
        return "hello";
    }
```

## Configuration

The extension automatically uses your VS Code settings:

### Global Setting
```typescript
    {
      "editor.tabSize": 4
    }
```