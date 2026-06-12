export function Logo() {
  return (
    <div className="flex items-center gap-2.5" aria-label="ОртоЦентр логотип" role="img">
      <svg className="w-11 h-11 md:w-[38px] md:h-[38px] shrink-0" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Фон */}
        <rect width="38" height="38" rx="9" fill="#edf7f1"/>
        {/* Буква О — зелёное кольцо */}
        <circle cx="19" cy="19" r="10" stroke="#3d9a5c" strokeWidth="3.5" fill="none"/>
        {/* Искра — оранжевая дуга поверх, как росчерк */}
        <path
          d="M 10.5 13 Q 19 5 27.5 13"
          stroke="#ff6b2b"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Точка-акцент */}
        <circle cx="27.5" cy="13" r="2.2" fill="#ff6b2b"/>
      </svg>

      <div className="flex flex-col leading-none gap-0.5">
        <span className="text-xl md:text-[17px] font-extrabold tracking-tight leading-none">
          <span style={{ color: "#3d9a5c" }}>Орто</span><span style={{ color: "#ff6b2b" }}>Центр</span>
        </span>
        <span className="text-[10px] md:text-[9px] font-semibold tracking-widest text-muted-foreground uppercase leading-none">
          Лаборатория ортезирования
        </span>
      </div>
    </div>
  )
}