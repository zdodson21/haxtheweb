import { html, fixture, expect } from '@open-wc/testing';
import "../citation-generator.js";

describe("CitationGenerator test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <citation-generator
        title="title"
      ></citation-generator>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
