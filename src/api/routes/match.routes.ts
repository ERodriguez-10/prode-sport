import { Request, Response, Router } from "express";
import * as league from "../../../league.json";
import * as fixture from "../../../fixture.json";

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

export default matchRouter;
