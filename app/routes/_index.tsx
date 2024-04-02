import type { MetaFunction } from "@remix-run/node";
import {
  RiGithubFill,
  RiNewsLine,
  RiSearch2Line,
  RiTwitterXFill,
} from "@remixicon/react";
import Link from "~/components/Link";
import profileImage from "~/images/fmatzy.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "fmatzy.github.io" },
    { name: "description", content: "Official page by fmatzy" },
  ];
};

export default function Index() {
  return (
    <div className="mx-auto my-10 max-w-lg px-5 text-gray-800">
      <h1 className="mb-6 text-3xl font-extrabold">
        <a href="/" className="transition-opacity hover:opacity-80">
          fmatzy.github.io
        </a>
      </h1>
      <div className="flex flex-row gap-5">
        <div>
          <img
            className="h-[128px] w-[128px] rounded-xl border border-gray-400"
            alt="profile"
            src={profileImage}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p>
            <span className="text-2xl font-semibold">fmatzy</span>
            <span className="ml-2 text-lg">(Yusei FUJIMATSU)</span>
          </p>
          <p>京都大学修士了。</p>
          <p>
            今は東京でWebエンジニアをやっています。
            <br />
            Go/TypeScript/Node.jsがメイン。
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-row">
        <Link
          href="https://github.com/fmatzy"
          label="GitHub"
          iconElement={
            <i className="mr-1 inline-block align-text-bottom leading-none">
              <RiGithubFill size={18} color="black" />
            </i>
          }
        />
        <Link
          href="https://qiita.com/fmatzy"
          label="Qiita"
          iconElement={
            <i className="mr-1 inline-block align-text-bottom leading-none">
              <RiSearch2Line size={18} color="black" />
            </i>
          }
        />
        <Link
          href="https://x.com/fmatzy"
          label="X (Twitter)"
          iconElement={
            <i className="mr-1 inline-block align-text-bottom leading-none">
              <RiTwitterXFill size={18} color="black" />
            </i>
          }
        />
        <Link
          href="https://fmatzy.hatenablog.com/"
          label="hatena Blog"
          iconElement={
            <i className="mr-1 inline-block align-text-bottom leading-none">
              <RiNewsLine size={18} color="black" />
            </i>
          }
        />
      </div>
    </div>
  );
}
