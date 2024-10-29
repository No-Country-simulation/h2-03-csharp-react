

using Newtonsoft.Json;

namespace WakiBack.Models.APIRequest

{
    public class Country
    {
        [JsonProperty("id")]
        public int? Id { get; set; }

        [JsonProperty("name")]
        public string? Name { get; set; }
    }

    public class Season
    {
        [JsonProperty("is_active")]
        public string? IsActive { get; set; }

        [JsonProperty("year")]
        public string? Year { get; set; }
    }

    public class Team
    {
        [JsonProperty("id")]
        public int? Id { get; set; }

        [JsonProperty("name")]
        public string? Name { get; set; }
    }

    public class Goals
    {
        [JsonProperty("home_ht_goals")]
        public int HomeHtGoals { get; set; }

        [JsonProperty("away_ht_goals")]
        public int AwayHtGoals { get; set; }

        [JsonProperty("home_ft_goals")]
        public int HomeFtGoals { get; set; }

        [JsonProperty("away_ft_goals")]
        public int AwayFtGoals { get; set; }

        [JsonProperty("home_et_goals")]
        public int HomeEtGoals { get; set; }

        [JsonProperty("away_et_goals")]
        public int AwayEtGoals { get; set; }

        [JsonProperty("home_pen_goals")]
        public int HomePenGoals { get; set; }

        [JsonProperty("away_pen_goals")]
        public int AwayPenGoals { get; set; }
    }

    public class Player
    {
        [JsonProperty("id")]
        public int? Id { get; set; }

        [JsonProperty("name")]
        public string? Name { get; set; }
    }

    public class Event
    {
        [JsonProperty("event_type")]
        public string? EventType { get; set; }

        [JsonProperty("event_minute")]
        public string? EventMinute { get; set; }

        [JsonProperty("team")]
        public string? Team { get; set; }

        [JsonProperty("player")]
        public Player? Player { get; set; }

        [JsonProperty("player_in")]
        public Player? PlayerIn { get; set; }

        [JsonProperty("player_out")]
        public Player? PlayerOut { get; set; }
    }

    public class Odds
    {
        [JsonProperty("match_winner")]
        public MatchWinner? MatchWinner { get; set; }

        [JsonProperty("over_under")]
        public OverUnder? OverUnder { get; set; }

        [JsonProperty("handicap")]
        public Handicap? Handicap { get; set; }

        [JsonProperty("last_modified_timestamp")]
        public long? LastModifiedTimestamp { get; set; }
    }

    public class MatchWinner
    {
        [JsonProperty("home")]
        public double? Home { get; set; }

        [JsonProperty("draw")]
        public double? Draw { get; set; }

        [JsonProperty("away")]
        public double? Away { get; set; }
    }

    public class OverUnder
    {
        [JsonProperty("total")]
        public double? Total { get; set; }

        [JsonProperty("over")]
        public double? Over { get; set; }

        [JsonProperty("under")]
        public double? Under { get; set; }
    }

    public class Handicap
    {
        [JsonProperty("market")]
        public double? Market { get; set; }

        [JsonProperty("home")]
        public double? Home { get; set; }

        [JsonProperty("away")]
        public double? Away { get; set; }
    }

    public class Match
    {
        [JsonProperty("id")]
        public int? Id { get; set; }

        [JsonProperty("date")]
        public string? Date { get; set; }

        [JsonProperty("time")]
        public string? Time { get; set; }

        [JsonProperty("teams")]
        public Teams? Teams { get; set; }

        [JsonProperty("status")]
        public string? Status { get; set; }

        [JsonProperty("minute")]
        public int? Minute { get; set; }

        [JsonProperty("winner")]
        public string? Winner { get; set; }

        [JsonProperty("has_extra_time")]
        public string? HasExtraTime { get; set; }

        [JsonProperty("has_penalties")]
        public string? HasPenalties { get; set; }

        [JsonProperty("goals")]
        public Goals? Goals { get; set; }

        [JsonProperty("events")]
        public List<Event>? Events { get; set; }

        [JsonProperty("odds")]
        public Odds? Odds { get; set; }

        [JsonProperty("match_preview")]
        public MatchPreview? MatchPreview { get; set; }
    }

    public class Teams
    {
        [JsonProperty("home")]
        public Team? Home { get; set; }

        [JsonProperty("away")]
        public Team? Away { get; set; }
    }

    public class MatchPreview
    {
        [JsonProperty("has_preview")]
        public string? HasPreview { get; set; }

        [JsonProperty("word_count")]
        public int? WordCount { get; set; }
    }

    public class Stage
    {
        [JsonProperty("stage_id")]
        public int? StageId { get; set; }

        [JsonProperty("stage_name")]
        public string? StageName { get; set; }

        [JsonProperty("is_active")]
        public string? IsActive { get; set; }

        [JsonProperty("matches")]
        public List<Match>? Matches { get; set; }
    }

    public class Welcome
    {
        [JsonProperty("league_id")]
        public int? LeagueId { get; set; }

        [JsonProperty("league_name")]
        public string? LeagueName { get; set; }

        [JsonProperty("country")]
        public Country? Country { get; set; }

        [JsonProperty("is_cup")]
        public string? IsCup { get; set; }

        [JsonProperty("season")]
        public Season? Season { get; set; }

        [JsonProperty("stage")]
        public List<Stage>? Stage { get; set; }
    }
}


