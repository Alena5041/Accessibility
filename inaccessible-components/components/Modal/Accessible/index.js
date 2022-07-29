import { useState } from "react";

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const focusableElements = document.querySelectorAll(
    'button:not(.a-modal__close-btn), a[href]:not(.a-modal__link), input, select, textarea, [tabindex]:not([tabindex="-1"]), details'
  );

  const focusableModalElements = document.querySelectorAll(
    "button.a-modal__close-btn, a.a-modal__link"
  );

  if (isModalOpen) {
    for (let element of focusableModalElements) {
      element.removeAttribute("tabindex", "-1");
    }
    for (let element of focusableElements) {
      element.setAttribute("tabindex", "-1");
    }
  }

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);

    for (let element of focusableElements) {
      element.removeAttribute("tabindex", "-1");
    }

    for (let element of focusableModalElements) {
      element.setAttribute("tabindex", "-1");
    }

    const firstFocusableElement = focusableElements[0];

    setTimeout(() => {
      firstFocusableElement.focus();
    }, 300);
  };

  return (
    <>
      <div
        className={`a-modal__wrapper ${
          isModalOpen ? "a-modal__wrapper--open" : ""
        }`}
      >
        <div
          className="a-modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <div className="a-modal__content">
            <h2 className="a-modal__title" id="modalTitle">
              Modal Title
            </h2>

            <p id="modalDescription">
              Modal window is a user experience pattern that is useful when you
              want to bring the user&apos;s attention to something important
              without leaving the current context/page.
            </p>
            <marquee behavior="" direction="">
              <p>
                Recommendation: You might also learn more about the dialog role.{" "}
                <a
                  className="a-modal__link"
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role"
                >
                  Click here
                </a>{" "}
                to learn more.
              </p>
            </marquee>

            <button
              id="modal-1-close-btn"
              className="a-modal__close-btn"
              aria-label="Close dialog"
              type="button"
              onClick={handleCloseButtonClick}
            >
              <span aria-hidden="true">X</span>
            </button>
          </div>
        </div>
      </div>

      <button type="button" onClick={() => setIsModalOpen(true)}>
        Open modal window
      </button>
    </>
  );
}
