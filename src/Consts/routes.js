const ROUTES = {
  auth: "/auth",

  tekoop: "/tekoop",
  tehuur: "/tehuur",
  pand: {path: "/pand/:id", to: "/pand/"},

  account: {path: "/account/:id", to: "/account/"},
  admin: "/admin",
  ImmoKantoor: "/ImmoKantoor",
  gebruiker: {path: "/gebruiker/:id", to: "/gebruiker/"},

  berichten: "/ImmoKantoor/berichten",
  bericht: {path: "/bericht/:id", to: "/bericht/"},

  
  bewerkgebruiker: {path: "/bewerkgebruiker/:id", to: "/bewerkgebruiker/"},
  bewerkpand: {path: "/bewerkpand/:id", to: "/bewerkpand/"},
  bewerkkantoor: {path: "/bewerkkantoor/:id", to: "/bewerkkantoor/"},
  
  notFound: "*"
}

export default ROUTES;