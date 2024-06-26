import { button } from '@components/elements';
import { GithubIcon } from '@components/icons';

export default function HeroPage({ data }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-center">
        <span className="rounded-full bg-gradient-to-r from-[#4F46E5] to-[#E114E5] px-3 py-0.5 text-sm text-white">
          {data.hero.slogan}
        </span>
      </div>
      <div className="mx-auto space-y-5 text-center">
        <h2 className="mx-auto text-4xl font-extrabold !leading-tight  dark:text-white md:text-5xl">
          {data.hero.title1} <br />
          <span className="bg-gradient-to-r from-[#4F46E5] to-[#E114E5] bg-clip-text text-transparent">
            {data.hero.title2}
          </span>
        </h2>
        <p className="mx-auto max-w-3xl">{data.hero.des}</p>
        <div className="flex flex-col items-center justify-center gap-x-3 space-y-2 sm:flex sm:flex-row sm:space-y-0">
          <a
            className={button()}
            href="http://backend.langchat.cn/"
            target="_blank"
          >
            {data.hero.frontBtn}
          </a>
          <a
            className={button({
              flat: true,
              color: 'neutral'
            })}
            href="https://github.com/tycoding/langchat"
            target="_blank"
          >
            <div className="flex items-center gap-1.5">
              <GithubIcon />
              <span>Github</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
