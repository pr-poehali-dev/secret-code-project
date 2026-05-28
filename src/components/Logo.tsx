export function Logo() {
  return (
    <div className="flex items-center gap-2.5" aria-label="ОртоЦентр логотип" role="img">
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="38" height="38" rx="9" fill="#edf7f1"/>
        {/* Голень — вытянутый овал */}
        <path
          d="M19 5 C15.5 5 13 7.8 13 11 L13 25 C13 29 15.5 32 19 33 C22.5 32 25 29 25 25 L25 11 C25 7.8 22.5 5 19 5 Z"
          fill="#3d9a5c"
          fillOpacity="0.15"
          stroke="#3d9a5c"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Ступня */}
        <path
          d="M15 33 Q19 36.5 23 33"
          stroke="#3d9a5c"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Ремешок верхний */}
        <rect x="11" y="14" width="16" height="3" rx="1.5" fill="#ff6b2b"/>
        {/* Ремешок нижний */}
        <rect x="11" y="21" width="16" height="3" rx="1.5" fill="#ff6b2b"/>
      </svg>

      <div className="flex flex-col leading-none gap-0.5">
        <span className="text-[17px] font-extrabold tracking-tight leading-none">
          <span style={{ color: "#3d9a5c" }}>Орто</span><span style={{ color: "#ff6b2b" }}>Центр</span>
        </span>
        <span className="text-[9px] font-semibold tracking-widest text-muted-foreground uppercase leading-none">
          Лаборатория ортезирования
        </span>
      </div>
    </div>
  )
}
