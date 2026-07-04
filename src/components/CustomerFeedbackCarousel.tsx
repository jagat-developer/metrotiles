type Review = {
  name: string;
  text: string;
};

function ReviewCard({
  review,
  index,
  hidden = false,
}: {
  review: Review;
  index: number;
  hidden?: boolean;
}) {
  return (
    <blockquote
      className="min-h-[220px] w-[82vw] shrink-0 rounded-[6px] border border-stone-200 bg-[#faf9f6] p-6 shadow-[0_18px_55px_rgba(40,34,27,0.06)] sm:w-[420px] lg:w-[520px]"
      aria-hidden={hidden}
      aria-label={
        hidden ? undefined : `Customer review ${index + 1}: ${review.name}`
      }
      tabIndex={hidden ? -1 : 0}
    >
      <p className="text-xl leading-9 text-stone-800 sm:text-2xl">
        &quot;{review.text}&quot;
      </p>
      <footer className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
        {review.name}
      </footer>
    </blockquote>
  );
}

export function CustomerFeedbackCarousel({
  reviews,
}: {
  reviews: Review[];
}) {
  return (
    <div className="feedback-marquee -mx-4 min-w-0 overflow-hidden px-4 sm:mx-0 sm:px-0">
      <div
        className="feedback-marquee-track flex w-max"
        role="region"
        aria-label="Continuously scrolling customer feedback"
      >
        <div className="flex gap-4 pr-4">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.name}
              review={review}
              index={index}
            />
          ))}
        </div>

        <div className="flex gap-4 pr-4" aria-hidden="true">
          {reviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-duplicate`}
              review={review}
              index={index}
              hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
