import { Request, Response, Router } from "express";
import * as league from "../../../league.json";
import * as fixture from "../../../fixture.json";
import * as livescore from "../../../livescore.json";
import * as standings from "../../../standings.json";

const matchRouter = Router();

matchRouter.get("/leagues", async (req: Request, res: Response) => {
  const availableLeague: Object[] = [];

  league.data.response.map((l) => {
    let lastSeason = l.seasons.length - 1;
    availableLeague.push({
      id: l.league.id,
      name: l.league.name,
      logo: l.league.logo,
      season: l.seasons[lastSeason].year,
      seasonStart: l.seasons[lastSeason].start,
      seasonEnd: l.seasons[lastSeason].end,
    });
  });
  res.json({ data: availableLeague });
});

matchRouter.get("/fixture", async (req: Request, res: Response) => {
  const fixtureLeague: Object[] = [];

  fixture.data.response.map((f) => {
    fixtureLeague.push({
      idMatch: f.fixture.id,
      date: f.fixture.date,
      referee: f.fixture.referee,
      stadium: f.fixture.venue.name,
      status: f.fixture.status.short,
      round: f.league.round,
      homeTeam: {
        name: f.teams.home.name,
        logo: f.teams.home.logo,
        goals: f.goals.home,
        winner: f.teams.home.winner,
      },
      awayTeam: {
        name: f.teams.away.name,
        logo: f.teams.away.logo,
        goals: f.goals.away,
        winner: f.teams.away.winner,
      },
    });
  });

  res.json({ data: fixtureLeague });
});

matchRouter.get("/livescore", async (req: Request, res: Response) => {
  const livescoreMatch: Object[] = [];

  livescore.data.response.map((l) => {
    livescoreMatch.push({
      idMatch: l.fixture.id,
      status: l.fixture.status.short,
      homeTeam: {
        goals: l.goals.home,
        winner: l.teams.home.winner,
      },
      awayTeam: {
        goals: l.goals.away,
        winner: l.teams.away.winner,
      },
    });
  });

  res.json({ data: livescoreMatch });
});

matchRouter.get("/standings", async (req: Request, res: Response) => {
  const standingsTableA: Object[] = [];
  const standingsTableB: Object[] = [];

  standings.response[0].league.standings[0].map((s) => {
    standingsTableA.push({
      group: s.rank,
      teamId: s.team.id,
      teamName: s.team.name,
      teamLogo: s.team.logo,
      points: s.points,
      goalsDiff: s.goalsDiff,
      form: s.form,
      status: s.status,
      all: {
        played: s.all.played,
        win: s.all.win,
        draw: s.all.draw,
        lose: s.all.lose,
        goals: {
          for: s.all.goals.for,
          agains: s.all.goals.against,
        },
      },
    });
  });

  standings.response[0].league.standings[1].map((s) => {
    standingsTableB.push({
      group: s.rank,
      teamId: s.team.id,
      teamName: s.team.name,
      teamLogo: s.team.logo,
      points: s.points,
      goalsDiff: s.goalsDiff,
      form: s.form,
      status: s.status,
      all: {
        played: s.all.played,
        win: s.all.win,
        draw: s.all.draw,
        lose: s.all.lose,
        goals: {
          for: s.all.goals.for,
          agains: s.all.goals.against,
        },
      },
    });
  });

  res.json({ dataA: standingsTableA, dataB: standingsTableB });
});

export default matchRouter;
