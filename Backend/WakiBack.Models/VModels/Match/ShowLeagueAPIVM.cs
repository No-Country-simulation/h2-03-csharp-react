﻿namespace WakiBack.Models
{
    public class ShowLeagueAPIVM : BaseViewModel
    {
        public int? LeagueId { get; set; }
        public string? Name { get; set; }
        public string? LogoUrl { get; set; }
        public ShowCountryVM? Country { get; set; }
    }
}
