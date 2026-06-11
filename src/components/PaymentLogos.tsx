export function PaymentLogos() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">

      {/* Visa */}
      <div className="flex items-center justify-center bg-white rounded-lg px-3 h-9 border border-border/60 min-w-[58px]">
        <svg viewBox="0 0 52 17" height="14" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
          <path d="M21.5 0.9L17.8 16.1H14L17.8 0.9H21.5Z" fill="#1A1F71"/>
          <path d="M37.4 11.1L39.4 5.5L40.5 11.1H37.4ZM41.4 16.1H44.8L41.8 0.9H38.6C37.8 0.9 37.1 1.4 36.8 2.1L31.4 16.1H35.3L36.1 13.8H40.9L41.4 16.1Z" fill="#1A1F71"/>
          <path d="M30.6 11.4C30.6 7.6 25.3 7.4 25.3 5.7C25.3 5.2 25.8 4.6 27.1 4.5C27.8 4.4 29.6 4.4 31.6 5.3L32.3 1.9C31.4 1.6 30.3 1.3 28.8 1.3C25 1.3 22.3 3.3 22.3 6.2C22.3 8.3 24.2 9.5 25.7 10.2C27.2 10.9 27.7 11.3 27.7 11.9C27.7 12.8 26.6 13.3 25.5 13.3C23.3 13.3 22.1 12.7 21.2 12.3L20.5 15.8C21.4 16.2 23.1 16.7 24.9 16.7C29 16.7 31.6 14.8 31.6 11.7L30.6 11.4Z" fill="#1A1F71"/>
          <path d="M15.5 0.9L9.4 16.1H5.4L2.4 3.8C2.2 2.9 2.1 2.6 1.4 2.2C0.3 1.7 0 1.5 0 1.3L0.1 0.9H6.8L9.4 13.6L15.5 0.9Z" fill="#1A1F71"/>
        </svg>
      </div>

      {/* Mastercard */}
      <div className="flex items-center justify-center bg-white rounded-lg px-2.5 h-9 border border-border/60 min-w-[52px]">
        <svg viewBox="0 0 38 24" height="22" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
          <circle cx="13.5" cy="12" r="9" fill="#EB001B"/>
          <circle cx="24.5" cy="12" r="9" fill="#F79E1B"/>
          <path d="M19 4.8C21.5 6.5 23.2 9.1 23.2 12C23.2 14.9 21.5 17.5 19 19.2C16.5 17.5 14.8 14.9 14.8 12C14.8 9.1 16.5 6.5 19 4.8Z" fill="#FF5F00"/>
        </svg>
      </div>

      {/* МИР — текст как в официальном логотипе: М синий, И и Р зелёные */}
      <div className="flex items-center justify-center bg-white rounded-lg px-3 h-9 border border-border/60 min-w-[58px]">
        <svg viewBox="0 0 52 20" height="15" xmlns="http://www.w3.org/2000/svg" aria-label="МИР">
          <defs>
            <linearGradient id="mir-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1CAADC"/>
              <stop offset="100%" stopColor="#0070BA"/>
            </linearGradient>
          </defs>
          {/* М — верхняя шапка */}
          <path d="M0 0H12C14.8 0 17.2 1.8 18 4.5L19.2 9H0V0Z" fill="url(#mir-blue)"/>
          {/* М — нижняя часть */}
          <path d="M0 10.5H19.2V20H1.5C0.7 20 0 19.3 0 18.5V10.5Z" fill="#4DB45E"/>
          {/* И */}
          <rect x="21" y="0" width="3" height="20" fill="#4DB45E"/>
          <rect x="30" y="0" width="3" height="20" fill="#4DB45E"/>
          <path d="M24 0L30 10V0" fill="none" stroke="#4DB45E" strokeWidth="3" strokeLinejoin="round"/>
          {/* Р */}
          <rect x="35" y="0" width="3" height="20" fill="url(#mir-blue)"/>
          <path d="M38 0H44C47.3 0 50 2.5 50 5.5C50 8.5 47.3 11 44 11H38V0Z" fill="url(#mir-blue)"/>
        </svg>
      </div>

      {/* PayKeeper — официальный логотип */}
      <div className="flex items-center justify-center bg-white rounded-lg px-3 h-9 border border-border/60">
        <img
          src="https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/bucket/3cc2e763-1aa7-4793-9c94-164dccd13495.png"
          alt="PayKeeper"
          height={28}
          style={{ height: 28, width: "auto", objectFit: "contain" }}
        />
      </div>

    </div>
  )
}
