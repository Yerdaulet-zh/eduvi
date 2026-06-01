import { useEffect, RefObject } from 'react';

interface KeyboardNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  containerRef: RefObject<HTMLElement | null>;
  itemSelector: string; // CSS selector to find the focusable items (e.g., 'a, button')
}

export function useKeyboardNavigation({
  isOpen,
  onClose,
  containerRef,
  itemSelector,
}: KeyboardNavigationProps) {
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const container = containerRef.current;

    // Find all focusable items inside the dropdown
    const elements = Array.from(
      container.querySelectorAll<HTMLElement>(itemSelector)
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement as HTMLElement;
      const currentIndex = elements.indexOf(activeElement);

      switch (event.key) {
        case 'Enter':
        case ' ': // Spacebar
          event.preventDefault();
          elements[currentIndex].click();
          onClose();
          break;

        case 'Escape':
          event.preventDefault();
          onClose();
          break;

        case 'ArrowDown':
          event.preventDefault();
          // Move to next item, or loop back to start
          const nextIndex = (currentIndex + 1) % elements.length;
          elements[nextIndex]?.focus();
          break;

        case 'ArrowUp':
          event.preventDefault();
          // Move to previous item, or loop to the end
          const prevIndex = (currentIndex - 1 + elements.length) % elements.length;
          elements[prevIndex]?.focus();
          break;

        case 'Home':
          event.preventDefault();
          elements[0]?.focus();
          break;

        case 'End':
          event.preventDefault();
          elements[elements.length - 1]?.focus();
          break;

        case 'Tab':
          // closing on tab-out is optional,
          // if user tab past the last item, close the menu safely.
          if (!event.shiftKey && currentIndex === elements.length - 1) {
            onClose();
          }
          break;
      }
    };

    // Listen for keys on the container level
    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, containerRef, itemSelector]);
}
