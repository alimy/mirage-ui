// Copyright 2021 Michael Li <alimy@gility.net>. All rights reserved.
// Use of this source code is governed by GNU General Public License 2.0 that
// can be found in the LICENSE file.

package ui

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
)

//go:embed portal/dist/css
//go:embed portal/dist/js/*.js
//go:embed portal/dist/favicon.ico
//go:embed portal/dist/index.html
var content embed.FS

// NewFileSystem get a http.FileSystem instance
func NewFileSystem() http.FileSystem {
	embedFS, err := fs.Sub(content, "portal/dist")
	if err != nil {
		log.Fatal(err)
	}
	return http.FS(embedFS)
}
