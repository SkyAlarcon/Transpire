# ATHLETES
## createAtlhete
- Create Athlete
- No further connection

## login
- Login Athlete
- No further connection

## allAtlhetes
- Get a list of ALL Athletes
- No further connection

## updateAtlhete
- Update athlete's personal info
- No further connection

## findAthleteById
- Find an Athlete via ID
- No further connection

## findAthleteByQuery
- Find an Athlete via query
- No further connection

## deleteAthlete
- Delete Athlete's account
- Connection:
  - Teams:
    - Must remove them from team's athletes list
    - Must remove from team's adm list IF they are not the only one
  - Followers:
    - Must remove from "following" list from other Athletes
  - Following:
    - Must remove from "followers" list from other Athletes

# TEAMS
## createTeam
- Create Team with basic info
- Connection:
  - Must put the creator as adm
  - Must put the creator as athlete

## allTeams
- Get all teams
- No further connection

## updateTeam
- Update info
- No further connections

## addRemoveAdministrator
- Add/Remove Admin
- Connection:
  - If you going to add an admin they MUST be in team

## findTeamById
- Find team by ID
- No further connections

## findTeamByQuery
- Find by query
- No further connections

## deleteTeam
- Delete team
- Connection:
  - Must remove team from ALL athletes' teams list

## removeAthleteFromTeam
- Remove athlete from team
- Connection:
  - Must remove the team from athlete's teams list

## enter_LeaveTeam
- Enter/Leave team
- Connection:
  - Must add or remove athlete from team's athletes list
  - Must add or remove team from athlete's teams list