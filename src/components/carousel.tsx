import React from 'react';

interface CarouselHeaderButton {
  label: string;
  value: string;
  selected: boolean;
  onClick: () => void;
}

interface CarouselProps<T> {
  items: T[];
  currentIndex: number;
  itemsPerPage: number;
  renderItem: (item: T) => React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
  containerClassName?: string;
  itemsContainerClassName?: string;
  headerButtons?: CarouselHeaderButton[];
  title?: string;
}

function Carousel<T>({
  items,
  currentIndex,
  itemsPerPage,
  renderItem,
  onNext,
  onPrev,
  containerClassName = '',
  itemsContainerClassName = '',
  headerButtons,
  title
}: CarouselProps<T>) {
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className={containerClassName}>
      <div className="flex w-full justify-between">
        <div className="flex bg-white">
          {headerButtons ? (
            headerButtons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`w-[200px] h-[44px] flex justify-center items-center border border-[#E4E4E4] font-medium cursor-pointer
                  ${button.selected ? 'text-primaryColor border-t-2 border-t-primaryColor' : 'text-gray-600 hover:text-primaryColor'}`}
              >
                {button.label}
              </button>
            ))
          ) : (
            title && (
              <div className="flex bg-white w-[200px] h-[44px] justify-center items-center border-b border-b-[#E4E4E4] border-r border-r-[#E4E4E4] border-l border-l-[#E4E4E4] font-medium cursor-pointer text-primaryColor border-t-2 border-t-primaryColor">
                {title}
              </div>
            )
          )}
        </div>
        <div className="flex bg-white">
          <button
            onClick={onPrev}
            className={`w-[44px] h-[44px] flex justify-center items-center border border-[#E4E4E4] transition-opacity ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'
            }`}
            disabled={currentIndex === 0}
          >
            <img src="/Icon-preview.svg" alt="Précédent" />
          </button>
          <button
            onClick={onNext}
            className={`w-[44px] h-[44px] flex justify-center items-center border border-[#E4E4E4] transition-opacity ${
              currentIndex + itemsPerPage >= items.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'
            }`}
            disabled={currentIndex + itemsPerPage >= items.length}
          >
            <img src="/icon-next.svg" alt="Suivant" />
          </button>
        </div>
      </div>
      <div className={itemsContainerClassName}>
        {visibleItems.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem(item)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Carousel;