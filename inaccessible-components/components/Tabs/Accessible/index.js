import { useState } from "react";

export default function Tabs() {
  const data = [
    {
      id: "react",
      title: "React",
      text: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by <a href="https://about.facebook.com/">Meta</a> (formerly Facebook) and a community of individual developers and companies.',
    },
    {
      id: "vue",
      title: "Vue",
      text: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and <a href="https://en.wikipedia.org/wiki/Single-page_application">single-page applications</a>. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
    },
    {
      id: "angular",
      title: "Angular",
      text: 'AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by <a href="https://www.apple.com/">Google</a> and a community of individuals and corporations.',
    },
  ];

  const [activePanelId, setActivePanelId] = useState(data[0].id);

  const handleTablistClick = (id) => setActivePanelId(id);

  const isPanelActive = (id) => id === activePanelId;

  return (
    <div className="a-tabs">
      <p>
        Front-end web development is the development of the graphical user
        interface of a website, through the use of HTML, CSS, and JavaScript, so
        that users can view and interact with that website.
      </p>
      <p>
        There are several libraries and frameworks that help speed up the front
        end development. The most popular are React, Vue, and Angular.
      </p>
      <ul className="a-tabs__list" role="tablist">
        {data.map(({ id, title }) => (
          <li
            data-tabpanel-id={id}
            key={id}
            id={`tab-${id}`}
            onClick={() => handleTablistClick(id)}
            tabIndex={`${isPanelActive(id) ? "0" : "-1"}`}
            className={`
            a-tabs__list-item
              ${isPanelActive(id) ? "a-tabs__list-item--active" : ""}
            `}
            role="tab"
            aria-controls={id}
            aria-selected={`${isPanelActive(id) ? "true" : "false"}`}
          >
            {title}
          </li>
        ))}
      </ul>

      <div className="a-tabs__panel-container">
        {data.map(({ id, text }) => (
          <div
            key={id}
            id={id}
            className={`
            a-tabs__panel
              ${isPanelActive(id) ? "a-tabs__panel--active" : ""}
            `}
            dangerouslySetInnerHTML={{ __html: text }}
            role="tabpanel"
            aria-labelledby={`tab-${id}`}
          />
        ))}
      </div>
    </div>
  );
}
