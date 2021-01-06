package ui

import (
	"embed"
	"io/fs"
	"net/http"
	"strings"
)

//go:embed portal/dist/css
//go:embed portal/dist/js/*.js
//go:embed portal/dist/favicon.ico
//go:embed portal/dist/index.html
var content embed.FS

type embedFS struct {
	prefix string
}

// Open opens the named file for reading and returns it as an fs.File.
func (f *embedFS) Open(name string) (fs.File, error) {
	return content.Open(f.path(name))
}

// ReadDir reads and returns the entire named directory.
func (f *embedFS) ReadDir(name string) ([]fs.DirEntry, error) {
	return content.ReadDir(f.path(name))
}

// ReadFile reads and returns the content of the named file.
func (f *embedFS) ReadFile(name string) ([]byte, error) {
	return content.ReadFile(f.path(name))
}

func (f *embedFS) path(name string) string {
	if name == "." {
		return f.prefix
	}
	return strings.Join([]string{f.prefix, name}, "/")
}

// NewFileSystem get a http.FileSystem instance
func NewFileSystem() http.FileSystem {
	return http.FS(&embedFS{
		prefix: "portal/dist",
	})
}
