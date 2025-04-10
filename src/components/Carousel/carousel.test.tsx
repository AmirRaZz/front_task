import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./Carousel";
import {
  jest,
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
} from "@jest/globals";

// Add these types to extend the Jest types
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

// Mock next/image since it's used in the component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img">) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("Carousel Component", () => {
  const mockSlides = [
    { id: 1, image: "/image1.jpg", alt: "Image 1" },
    { id: 2, image: "/image2.jpg", alt: "Image 2" },
    { id: 3, image: "/image3.jpg", alt: "Image 3" },
  ];

  beforeEach(() => {
    // Clear all mocks and timers before each test
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it("renders correctly with required props", () => {
    render(<Carousel slides={mockSlides} />);

    // First slide should be visible initially
    expect(screen.getByAltText("Image 1")).not.toBeNull();

    // Navigation buttons should exist
    expect(screen.getByLabelText("Previous slide")).not.toBeNull();
    expect(screen.getByLabelText("Next slide")).not.toBeNull();

    // Dots for navigation should exist (one for each slide)
    const dots = screen
      .getAllByRole("button")
      .filter((button) =>
        button.getAttribute("aria-label")?.includes("Go to slide")
      );
    expect(dots.length).toBe(3);
  });

  it("shows nothing when no slides are provided", () => {
    const { container } = render(<Carousel slides={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("navigates to the next slide when clicking the next button", () => {
    render(<Carousel slides={mockSlides} />);

    // Initially first slide is visible
    expect(screen.getByAltText("Image 1")).not.toBeNull();

    // Click next button
    fireEvent.click(screen.getByLabelText("Next slide"));

    // Second slide should now be visible
    expect(screen.getByAltText("Image 2")).not.toBeNull();
  });

  it("navigates to the previous slide when clicking the previous button", () => {
    render(<Carousel slides={mockSlides} />);

    // Go to the second slide first
    fireEvent.click(screen.getByLabelText("Next slide"));
    expect(screen.getByAltText("Image 2")).not.toBeNull();

    // Now click previous button
    fireEvent.click(screen.getByLabelText("Previous slide"));

    // First slide should be visible again
    expect(screen.getByAltText("Image 1")).not.toBeNull();
  });

  it("loops to the last slide when clicking previous on the first slide", () => {
    render(<Carousel slides={mockSlides} />);

    // Click previous on first slide
    fireEvent.click(screen.getByLabelText("Previous slide"));

    // Last slide should now be visible
    expect(screen.getByAltText("Image 3")).not.toBeNull();
  });

  it("loops to the first slide when clicking next on the last slide", () => {
    render(<Carousel slides={mockSlides} />);

    // Go to the last slide
    fireEvent.click(screen.getByLabelText("Next slide")); // to slide 2
    fireEvent.click(screen.getByLabelText("Next slide")); // to slide 3
    expect(screen.getByAltText("Image 3")).not.toBeNull();

    // Click next again to loop back
    fireEvent.click(screen.getByLabelText("Next slide"));

    // First slide should be visible again
    expect(screen.getByAltText("Image 1")).not.toBeNull();
  });

  it("navigates to the specific slide when clicking a dot", () => {
    render(<Carousel slides={mockSlides} />);

    // Find all dots and click on the third one
    const dots = screen
      .getAllByRole("button")
      .filter((button) =>
        button.getAttribute("aria-label")?.includes("Go to slide")
      );
    fireEvent.click(dots[2]); // Click the third dot (index 2)

    // Third slide should be visible
    expect(screen.getByAltText("Image 3")).not.toBeNull();
  });

  it("automatically advances to the next slide after the specified interval", () => {
    render(<Carousel slides={mockSlides} autoSlideInterval={2000} />);

    // Initially first slide is visible
    expect(screen.getByAltText("Image 1")).not.toBeNull();

    // Fast-forward time by 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Second slide should now be visible
    expect(screen.getByAltText("Image 2")).not.toBeNull();
  });

  it("resets the auto-slide timer when manually navigating", () => {
    render(<Carousel slides={mockSlides} autoSlideInterval={2000} />);

    // Initially first slide is visible
    expect(screen.getByAltText("Image 1")).not.toBeNull();

    // Advance timer by 1 second (not enough to trigger auto-slide)
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Manually navigate to next slide
    fireEvent.click(screen.getByLabelText("Next slide"));
    expect(screen.getByAltText("Image 2")).not.toBeNull();

    // Advance timer by 1 second (should not trigger auto-slide yet)
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Still on second slide (timer was reset when we clicked next)
    expect(screen.getByAltText("Image 2")).not.toBeNull();

    // Advance by another second to complete the interval
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Now auto-slide should have triggered
    expect(screen.getByAltText("Image 3")).not.toBeNull();
  });

  it("handles swipe gestures for mobile navigation", () => {
    render(<Carousel slides={mockSlides} />);

    const slideContainer = screen
      .getByAltText("Image 1")
      .closest("div")?.parentElement;
    expect(slideContainer).not.toBeNull();

    if (slideContainer) {
      // Simulate swipe left (to go to next slide)
      fireEvent.touchStart(slideContainer, { touches: [{ clientX: 200 }] });
      fireEvent.touchMove(slideContainer, { touches: [{ clientX: 50 }] });
      fireEvent.touchEnd(slideContainer);

      // Should now show second slide
      expect(screen.getByAltText("Image 2")).not.toBeNull();

      // Simulate swipe right (to go to previous slide)
      fireEvent.touchStart(slideContainer, { touches: [{ clientX: 50 }] });
      fireEvent.touchMove(slideContainer, { touches: [{ clientX: 200 }] });
      fireEvent.touchEnd(slideContainer);

      // Should now show first slide again
      expect(screen.getByAltText("Image 1")).not.toBeNull();
    }
  });

  it("ignores small touch movements that aren't swipes", () => {
    render(<Carousel slides={mockSlides} />);

    const slideContainer = screen
      .getByAltText("Image 1")
      .closest("div")?.parentElement;
    expect(slideContainer).not.toBeNull();

    if (slideContainer) {
      // Simulate a small touch movement (less than threshold)
      fireEvent.touchStart(slideContainer, { touches: [{ clientX: 100 }] });
      fireEvent.touchMove(slideContainer, { touches: [{ clientX: 80 }] });
      fireEvent.touchEnd(slideContainer);

      // Should still show first slide (no navigation occurred)
      expect(screen.getByAltText("Image 1")).not.toBeNull();
    }
  });
});
