export function Logo() {
  return (
    <div className="flex items-center gap-2.5" aria-label="ОртоЦентр логотип" role="img">
      {/* Иконка */}
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="14" fill="#f0f7f2"/>
        <path
          d="M25 10 C21 10 18 13 18 17 L18 37 C18 43 21 48 27 51 L30 57 L34 57 L37 51 C43 48 46 43 46 37 L46 17 C46 13 43 10 39 10 Z"
          fill="#3d9a5c"
          fillOpacity="0.18"
          stroke="#3d9a5c"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <line x1="18" y1="23" x2="46" y2="23" stroke="#ff6b2b" strokeWidth="3" strokeLinecap="round"/>
        <line x1="18" y1="33" x2="46" y2="33" stroke="#ff6b2b" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="18" cy="23" r="2.5" fill="#ff6b2b"/>
        <circle cx="46" cy="23" r="2.5" fill="#ff6b2b"/>
        <circle cx="18" cy="33" r="2.5" fill="#ff6b2b"/>
        <circle cx="46" cy="33" r="2.5" fill="#ff6b2b"/>
      </svg>

      {/* Текст */}
      <div className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight" style={{ color: "#3d9a5c" }}>
          Орто
          <span style={{ color: "#ff6b2b" }}>Центр</span>
        </span>
        <span className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
          Лаборатория ортезирования
        </span>
      </div>
    </div>
  )
}
