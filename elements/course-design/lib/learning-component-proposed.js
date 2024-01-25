/**
 * Copyright 2021
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit-element/lit-element.js";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip.js";
import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

// Defines the type options available in the HAX wiring, "Learning Objectives" is the default.
export const learningComponentNouns = {
  content: "Content",
  assessment: "Assessment",
  quiz: "Quiz",
  submission: "Submission",
  lesson: "Lesson",
  module: "Module",
  task: "Task",
  activity: "Activity",
  project: "Project",
  practice: "Practice",
  unit: "Unit",
  objectives: "Learning Objectives",
};

export const learningComponentVerbs = {
  connection: "Connection",
  knowledge: "Did You Know?",
  strategy: "Learning Strategy",
  discuss: "Discuss",
  listen: "Listen",
  make: "Make",
  observe: "Observe",
  present: "Present",
  read: "Read",
  reflect: "Reflect",
  research: "Research",
  watch: "Watch",
  write: "Write",
};

export const learningComponentTypes = {
  ...learningComponentVerbs,
  ...learningComponentNouns,
};

export const learningComponentColors = {
  content: "blue-grey",
  assessment: "red",
  quiz: "blue",
  submission: "deep-purple",
  lesson: "purple",
  module: "red",
  task: "blue-grey",
  activity: "orange",
  project: "deep-orange",
  practice: "brown",
  unit: "light-green",
  objectives: "indigo",
  connection: "green",
  knowledge: "cyan",
  strategy: "teal",
  discuss: "blue",
  listen: "purple",
  make: "orange",
  observe: "yellow",
  present: "light-blue",
  read: "lime",
  reflect: "amber",
  research: "deep-orange",
  watch: "pink",
  write: "deep-purple",
};

export function iconFromPageType(type) {
  switch (type) {
    case "content":
      return "lrn:page";
    case "assessment":
      return "lrn:assessment";
    case "quiz":
      return "lrn:quiz";
    case "submission":
      return "icons:move-to-inbox";
    case "lesson":
      return "hax:lesson";
    case "module":
      return "hax:module";
    case "unit":
      return "hax:unit";
    case "task":
      return "hax:task";
    case "activity":
      return "hax:ticket";
    case "project":
      return "hax:bulletin-board";
    case "practice":
      return "hax:shovel";
    case "connection":
      return "courseicons:chem-connection";
      break;
    case "knowledge":
      return "courseicons:knowledge";
      break;
    case "strategy":
      return "courseicons:strategy";
      break;
    case "discuss":
      return "courseicons:strategy";
      break;
    case "listen":
      return "courseicons:listen";
      break;
    case "make":
      return "courseicons:strategy";
      break;
    case "observe":
      return "courseicons:strategy";
      break;
    case "present":
      return "courseicons:strategy";
      break;
    case "read":
      return "courseicons:strategy";
      break;
    case "reflect":
      return "courseicons:strategy";
      break;
    case "research":
      return "courseicons:strategy";
      break;
    case "watch":
      return "courseicons:strategy";
      break;
    case "write":
      return "lrn:write";
      break;
  }
  return "courseicons:learning-objectives";
}

/**
 * `learning-component`
 * `An element for displaying learning materials.`
 * @demo demo/index.html
 * @element learning-component
 */
class LearningComponentProposed extends I18NMixin(DDD) {
  /**
   * Convention we use
   */
  static get tag() {
    return "learning-component-proposed";
  }

  /**
   * Properties
   */
  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      subtitle: { type: String },
      title: { type: String },
      icon: { type: String },
      url: { type: String },
    };
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('type') && this.type && this.type != '') {
      this.accentColor = learningComponentColors[this.type];
      this.title = learningComponentTypes[this.type];
      this.icon = iconFromPageType(this.type)
    }
  }

  constructor() {
    super();
    this.icon = null;
    this.accentColor = null;
    this.dark = false;
    this.type = '';
    this.subtitle = null;
    this.title = null;
    this.url = null;
    this.t = {
      ...super.t,
      readMore: "Read More",
    };
  }

  /**
   * CSS
   */
  static get styles() {
    return [super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          margin: var(--ddd-spacing-4) 0;
        }
        .header {
          display: flex;
          align-items: center;
          background-color: var(
            --header-objectives-bg-color,
            var(--simple-colors-default-theme-accent-8, #dc7927)
          );
          padding: var(--ddd-spacing-3);
          color: var(
            --header-font-color,
            var(--simple-colors-default-theme-accent-1, #fff)
          );
        }
        .title {
          margin: var(--ddd-spacing-0);
          padding: var(--ddd-spacing-0);
          font-weight: var(--ddd-font-primary-bold);
          text-transform: uppercase;
        }
        .sub-title {
          font-weight: var(--ddd-font-primary-regular);
          text-transform: uppercase;
        }
        .icon {
          display: flex;
          min-height: var(--ddd-icon-xl);
          min-width: var(--ddd-icon-xl);
        }
        .urlbutton a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #000;
        }
        simple-icon-lite,
        simple-icon-button-lite {
          color: var(
            --header-svg-fill-color,
            var(--simple-colors-default-theme-grey-1, #fff)
          );
          margin: 0 var(--ddd-spacing-4) 0 var(--ddd-spacing-3);
          padding: var(--ddd-spacing-1);
        }

        simple-icon-button-lite {
          color: var(--simple-colors-default-theme-accent-8);
        }

        .content {
          font-size: var(--ddd-font-size-3xs);
          padding: var(--ddd-spacing-5) var(--ddd-spacing-3) var(--ddd-spacing-5) var(--ddd-spacing-6);
        }

        @media screen and (min-width: 320px) {
          .title {
            font-size: var(--ddd-font-size-3xs);
          }
          .sub-title {
            font-size: var(--ddd-font-size-4xs);
          }
          .urlbutton {
            display: flex;
            justify-content: center;
          }
          simple-icon-lite {
            --simple-icon-width: var(--ddd-icon-xxs);
            --simple-icon-height: var(--ddd-icon-xxs);
            height: 35px;
            width: 35px;
          }
        }

        @media screen and (min-width: 920px) {
          .title {
            font-size: var(--ddd-font-size-ms)
          }
          .sub-title {
            font-size: var(--ddd-font-size-s);
          }
          .urlbutton {
            display: flex;
            justify-content: end;
          }
          simple-icon-lite{
            --simple-icon-width: var(--ddd-icon-sm);
            --simple-icon-height: var(--ddd-icon-sm);
            height: var(--ddd-icon-xl);
            width: var(--ddd-icon-xl);
          }
          simple-icon-button-lite {
            --simple-icon-width: var(--ddd-icon-md);
            --simple-icon-height: var(--ddd-icon-md);
            height: var(--ddd-icon-xl);
            width: var(--ddd-icon-xl);
          }
        }
      `,
    ];
  }

  /**
   * HTML
   */
  render() {
    return html`
      <div class="header">
        <div class="icon">
          ${this.icon ? html`
          <simple-icon-lite
            icon="${this.icon}" class="b-sm r-rounded"
          ></simple-icon-lite>` : ``}
        </div>
        <div class="title-wrap">
          <div class="sub-title lh-120">${this.subtitle}</div>
          <div class="title lh-120">${this.title}</div>
        </div>
      </div>
      <div class="content b-sm bt-0 bs-lg">
        <slot></slot>
        ${this.url
          ? html` <div class="urlbutton">
              <a
                href="${this.url}"
                id="url"
                target="_blank"
                rel="nofollow noopener"
              >
                <simple-icon-button-lite
                  icon="icons:add-circle-outline"
                  label="${this.t.readMore}"
                ></simple-icon-button-lite>
              </a>
              <simple-tooltip for="url" animation-delay="0"
                >${this.t.readMore}</simple-tooltip
              >
            </div>`
          : ``}
      </div>
    `;
  }

  // Implement HAX Wiring
  static get haxProperties() {
    return {
      type: "grid",
      canScale: false,
      canPosition: false,
      hideDefaultSettings: true,
      gizmo: {
        title: "Learning Component Proposed",
        description:
          "A card for instructors to communicate pedagogy and instructional strategies.",
        icon: "icons:bookmark",
        color: "orange",
        tags: ["Instructional", "content", "design", "presentation", "instruction", "course", "learning", "card"],
        handles: [],
        meta: {
          author: "HAXTheWeb core team",
        },
      },
      settings: {
        configure: [
          {
            property: "type",
            title: "Type",
            description: "The type of card to be used.",
            inputMethod: "select",
            options: {"": "", ...learningComponentTypes},
            required: false
          },
          {
            property: "subtitle",
            title: "Sub-Title",
            description: "The sub-title of the card.",
            inputMethod: "textfield",
          },
          {
            property: "url",
            title: "Link",
            description:
              "An optional link  for the card (Link not available for Learning Objectives).",
            inputMethod: "url",
          },
          {
            slot: "",
            title: "Contents",
          },
        ],
        advanced: [
          {
            property: "title",
            title: "Title",
            description: "Set Title, this overrides type based title",
            inputMethod: "textfield",
          },
          {
            property: "icon",
            title: "Icon",
            description: "Set icon, this overrides type based icon",
            inputMethod: "iconpicker",
          },
          {
            property: "accentColor",
            title: "Accent color",
            description: "Set accent color, this overrides type based color",
            inputMethod: "colorpicker",
          },
          {
            property: "dark",
            title: "Dark mode",
            description: "Invert high and low tones",
            inputMethod: "boolean",
          },
        ],
      },
      saveOptions: {
        unsetAttributes: [
          "t",
        ],
      },
      demoSchema: [
        {
          tag: "learning-component",
          properties: {
            type: "objectives",
            subtitle: "Unit 1",
          },
          content: "<p>By the end of this lesson, you should be able to...</p>",
        },
      ],
    };
  }
}
customElements.define(LearningComponentProposed.tag, LearningComponentProposed);
export { LearningComponentProposed };