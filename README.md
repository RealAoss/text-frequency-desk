# Word Frequency Desk

Count Unicode words and rank them by frequency, ignoring letter case.

## Run

Use Node.js 20+. Run `node cli.mjs example.txt`, or pipe UTF-8 text into `node cli.mjs -`. Redirect stdout to keep the result. Other Node.js projects can import `transform` from `./transform.mjs`.

## Example

Text to analyze. The bundled sample produces output including:

```text
2	tea
```

## Limitations

Input is processed in memory. Use the format shown in the example file.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for checks and [CHANGELOG.md](CHANGELOG.md) for changes.

## License

[MIT License](LICENSE). Copyright (c) 2026 text-frequency-desk contributors.
