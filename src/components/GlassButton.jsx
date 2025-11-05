import clsx from 'clsx';

export default function GlassButton({ children, href, className = '', onClick, type = 'button' }) {
  const base = clsx(
    'group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium',
    'text-white/90 border border-white/20 bg-white/10 backdrop-blur-xl',
    'shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition',
    'hover:bg-white/15 hover:border-white/30 active:scale-[0.98]',
    'focus:outline-none focus:ring-2 focus:ring-white/20'
  );

  const content = (
    <>
      {/* inner soft gradient fill */}
      <span className="pointer-events-none absolute inset-0 -z-[1] rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-white/0" />
      {/* subtle inner border to enhance glass edge */}
      <span className="pointer-events-none absolute inset-[1px] -z-[1] rounded-2xl bg-gradient-to-b from-white/30/40 to-white/5" />
      {/* glossy highlight */}
      <span className="pointer-events-none absolute inset-x-1 top-1 h-1/2 rounded-xl bg-gradient-to-b from-white/35 via-white/10 to-transparent opacity-80" />
      {/* interactive sheen */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(120px 60px at 10% 0%, rgba(255,255,255,0.18), transparent 70%)' }} />
      <span className="relative">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={clsx(base, className)} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={clsx(base, className)} onClick={onClick}>
      {content}
    </button>
  );
}
