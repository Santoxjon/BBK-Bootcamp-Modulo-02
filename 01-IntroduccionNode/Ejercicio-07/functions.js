function nextTen(num) {
    return Array.from({ length: 10 }, (_, i) => (i + num) + 1)
}

module.exports = { nextTen };