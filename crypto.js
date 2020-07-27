// for test and bench browser compat

export function randomBytes (length) {
  return window.crypto.getRandomValues(new Uint8Array(length))
}

export default { randomBytes }
