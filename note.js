/**
 * "Represents a short written work typically less than a single paragraph in length."
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note
 */
export class Note {
  type = "Note"
  /**
   * @param {object} options
   * @param {string} options.content
   * @param {string} options.name
   */
  constructor({
    content,
    name,
  }) {
    this.content = content
    this.name = name
    this['@context'] = [
      "https://www.w3.org/ns/activitystreams"
    ]
  }
}
