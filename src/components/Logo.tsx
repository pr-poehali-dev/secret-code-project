export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="ОртоМастер логотип" role="img">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C8.5 2 6 4.5 6 7.5C6 9.5 7 11.2 8.5 12.3L7 22H17L15.5 12.3C17 11.2 18 9.5 18 7.5C18 4.5 15.5 2 12 2Z"
          stroke="#4A90A4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 7.5C9 6 10.3 5 12 5C13.7 5 15 6 15 7.5"
          stroke="#4A90A4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-lg font-bold text-foreground">ОртоЦентр</span>
    </div>
  )
}