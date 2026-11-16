import { useCallback, useEffect, useMemo, useState } from "react";
import { Code, GitHub, OpenInNew, Refresh } from "@mui/icons-material";
import { codingProfiles, githubContributions } from "../data/portfolio";
import TechLogo from "./TechLogo";

const leetcodeProfile = codingProfiles.find((profile) => profile.id === "leetcode");
const contributionLevels = ["--contribution-0", "--contribution-1", "--contribution-2", "--contribution-3", "--contribution-4"];
const currentYear = new Date().getFullYear();
const contributionPeriods = [
  { value: "last", label: "Last 12 months" },
  { value: String(currentYear), label: String(currentYear) },
  { value: String(currentYear - 1), label: String(currentYear - 1) },
];

function CodingProfiles() {
  const [leetcodeSolved, setLeetcodeSolved] = useState(leetcodeProfile.solved);
  const [leetcodeUpdated, setLeetcodeUpdated] = useState(false);
  const [contributionDays, setContributionDays] = useState([]);
  const [contributionTotal, setContributionTotal] = useState(githubContributions.contributionsLastYear);
  const [contributionPeriod, setContributionPeriod] = useState("last");
  const [contributionLoading, setContributionLoading] = useState(true);
  const [contributionError, setContributionError] = useState(false);
  const [contributionLive, setContributionLive] = useState(false);
  const [refreshVersion, setRefreshVersion] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadLeetCodeCount() {
      try {
        const response = await fetch(leetcodeProfile.statsApiUrl, { signal: controller.signal });
        if (!response.ok) throw new Error(`LeetCode stats request failed: ${response.status}`);
        const data = await response.json();
        const solved = data.solvedProblem ?? data.totalSolved;
        if (!Number.isInteger(solved) || solved < 0) {
          throw new Error("LeetCode stats response did not include a valid solved count.");
        }
        setLeetcodeSolved(solved);
        setLeetcodeUpdated(true);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    }

    loadLeetCodeCount();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      setContributionLoading(true);
      setContributionError(false);
      setContributionLive(false);
      setContributionDays([]);
      setContributionTotal(
        contributionPeriod === "last"
          ? githubContributions.contributionsLastYear
          : null,
      );

      try {
        const apiUrl = new URL(githubContributions.apiUrl);
        apiUrl.searchParams.set("y", contributionPeriod);
        const response = await fetch(apiUrl, {
          signal: controller.signal,
          cache: "no-store",
        });
        if (!response.ok) throw new Error(`GitHub contributions request failed: ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data.contributions) || data.contributions.length === 0) {
          throw new Error("GitHub contributions response did not include contribution days.");
        }

        const now = new Date();
        const today = [
          now.getFullYear(),
          String(now.getMonth() + 1).padStart(2, "0"),
          String(now.getDate()).padStart(2, "0"),
        ].join("-");
        const days = data.contributions.filter(
          (day) =>
            typeof day.date === "string" &&
            day.date <= today &&
            Number.isFinite(day.count) &&
            Number.isInteger(day.level),
        );
        if (days.length === 0) {
          throw new Error("GitHub contributions response did not include valid contribution days.");
        }

        setContributionDays(days);
        const totalKey = contributionPeriod === "last" ? "lastYear" : contributionPeriod;
        const total = data.total?.[totalKey];
        setContributionTotal(
          Number.isFinite(total)
            ? total
            : days.reduce((sum, day) => sum + day.count, 0),
        );
        setContributionLive(true);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setContributionError(true);
        }
      } finally {
        if (!controller.signal.aborted) setContributionLoading(false);
      }
    }

    loadContributions();

    return () => controller.abort();
  }, [contributionPeriod, refreshVersion]);

  const refreshContributions = useCallback(
    () => setRefreshVersion((version) => version + 1),
    [],
  );

  useEffect(() => {
    const refreshWhenVisible = () => {
      if (!document.hidden) refreshContributions();
    };
    const intervalId = window.setInterval(refreshContributions, 15 * 60 * 1000);
    window.addEventListener("focus", refreshWhenVisible);
    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refreshWhenVisible);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [refreshContributions]);

  const contributionWeeks = useMemo(() => {
    if (contributionDays.length === 0) return [];

    const firstDate = new Date(`${contributionDays[0].date}T00:00:00Z`);
    const cells = [
      ...Array(firstDate.getUTCDay()).fill(null),
      ...contributionDays,
    ];
    while (cells.length % 7 !== 0) cells.push(null);

    return Array.from({ length: cells.length / 7 }, (_, index) =>
      cells.slice(index * 7, index * 7 + 7),
    );
  }, [contributionDays]);

  return (
    <section id="coding" className="bg-[var(--bg)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-12">
          <p className="section-tag">Practice &amp; consistency</p>
          <h2 className="section-title">Coding Profiles</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid content-start gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {codingProfiles.map((profile) => {
              const isLeetCode = profile.id === "leetcode";
              return (
                <a
                  key={profile.id}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coding-profile-card group border border-[var(--line)] bg-[var(--paper)] p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--text)]">
                      <TechLogo name={profile.name} size={24} />
                      {profile.name}
                    </h3>
                    <OpenInNew
                      fontSize="small"
                      className="text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]"
                    />
                  </div>
                  <p className="mt-1 break-all text-base text-[var(--muted)]">@{profile.handle}</p>
                  {isLeetCode ? (
                    <>
                      <p className="mt-5 flex items-center gap-2 text-[var(--text)]">
                        <Code fontSize="small" className="text-[var(--accent)]" />
                        <span className="text-2xl font-semibold tabular-nums">
                          {leetcodeSolved.toLocaleString()}
                        </span>
                        <span className="text-sm text-[var(--muted)]">problems solved</span>
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        {leetcodeUpdated
                          ? "Live count"
                          : `Last checked ${leetcodeProfile.statsUpdatedAt}`}
                      </p>
                    </>
                  ) : (
                    <p className="mt-5 text-sm font-medium text-[var(--accent-strong)]">
                      View coding profile
                    </p>
                  )}
                </a>
              );
            })}
          </div>

          <div className="min-w-0 rounded-[6px] border border-[var(--line)] bg-[var(--paper)] p-5 sm:p-7">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--text)]">
                  <GitHub fontSize="small" />
                  GitHub contributions
                </h3>
                <p className="mt-1 text-base text-[var(--muted)]">
                  {contributionLoading
                    ? "Updating contributions…"
                    : contributionTotal === null
                      ? "Contribution total unavailable"
                      : `${contributionTotal.toLocaleString()} contributions ${
                          contributionPeriod === "last"
                            ? "in the last 12 months"
                            : `in ${contributionPeriod}`
                        }${contributionLive ? "" : " (saved total)"}`}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <label className="sr-only" htmlFor="contribution-period">
                  Contribution graph period
                </label>
                <select
                  id="contribution-period"
                  value={contributionPeriod}
                  onChange={(event) => setContributionPeriod(event.target.value)}
                  className="rounded border border-[var(--line)] bg-[var(--bg)] px-2 py-1.5 text-sm text-[var(--text)]"
                >
                  {contributionPeriods.map((period) => (
                    <option key={period.value} value={period.value}>
                      {period.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={refreshContributions}
                  disabled={contributionLoading}
                  aria-label="Refresh GitHub contributions"
                  title="Refresh contributions"
                  className="inline-flex h-9 w-9 items-center justify-center rounded border border-[var(--line)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-wait disabled:opacity-50"
                >
                  <Refresh fontSize="small" />
                </button>
                <a
                  href={githubContributions.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden text-sm font-medium text-[var(--accent-strong)] hover:underline sm:inline"
                >
                  View GitHub
                </a>
              </div>
            </div>

            {contributionWeeks.length > 0 ? (
              <div>
                <div className="mb-2 flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
                  <span>Sun</span>
                  <span>Scroll horizontally to explore each week</span>
                  <span>Sat</span>
                </div>
                <div
                  className="contribution-scroll overflow-x-auto pb-2"
                  role="region"
                  aria-label="Scrollable GitHub contribution graph"
                  tabIndex={0}
                >
                  <div
                    role="img"
                    aria-label={`${contributionTotal?.toLocaleString() ?? "GitHub"} contributions ${
                      contributionPeriod === "last"
                        ? "in the last 12 months"
                        : `in ${contributionPeriod}`
                    }`}
                    className="grid w-max grid-flow-col grid-rows-7 gap-1"
                  >
                    {contributionWeeks.flatMap((week, weekIndex) =>
                      week.map((day, dayIndex) => {
                        if (!day) {
                          return (
                            <span
                              key={`empty-${weekIndex}-${dayIndex}`}
                              className="h-3 w-3"
                              aria-hidden="true"
                            />
                          );
                        }

                        const level = Math.min(Math.max(day.level, 0), 4);
                        const date = new Date(`${day.date}T00:00:00Z`);
                        const label = `${day.count} contributions on ${date.toLocaleDateString(
                          undefined,
                          { month: "short", day: "numeric", timeZone: "UTC" },
                        )}`;

                        return (
                          <span
                            key={day.date}
                            title={label}
                            aria-label={label}
                            className="h-3 w-3 rounded-[2px]"
                            style={{ backgroundColor: `var(${contributionLevels[level]})` }}
                          />
                        );
                      }),
                    )}
                  </div>
                </div>
              </div>
            ) : contributionLoading ? (
              <p className="text-base text-[var(--muted)]" role="status">
                Loading contribution graph…
              </p>
            ) : contributionError ? (
              <p className="text-base leading-7 text-[var(--muted)]" role="status">
                The contribution graph could not be loaded. You can still view the activity on{" "}
                <a
                  href={githubContributions.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--accent-strong)] underline"
                >
                  GitHub
                </a>
                .
              </p>
            ) : (
              <p className="text-base text-[var(--muted)]" role="status">
                No contribution data is available for this period.
              </p>
            )}

            {contributionWeeks.length > 0 && (
              <div className="mt-4 flex justify-end text-sm text-[var(--muted)]">
                <div className="flex items-center gap-1.5" aria-label="Contribution intensity legend">
                  <span>Less</span>
                  {contributionLevels.map((level) => (
                    <span
                      key={level}
                      className="h-3 w-3 rounded-[2px]"
                      style={{ backgroundColor: `var(${level})` }}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;
