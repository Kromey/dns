
D("kromey.us", REG_NONE, DnsProvider(DSP_CLOUDFLARE),
	DefaultTTL(1),
	CF_PROXY_DEFAULT_OFF,
	CF_MANAGE_COMMENTS, // opt into comments syncing

	IGNORE("asgard"), // Dynamic DNS managed via script
	IGNORE("bifrost"), // Cloudflare-managed ZTNA Tunnel

	// Main website
	ALIAS("@", "kromey.pages.dev.", CF_PROXY_ON), // "CNAME" to Cloudflare Pages
	CNAME("www", "kromey.us.", CF_PROXY_ON),

	// IP "echo" API
	A("ip", sif_ip),
	A("ipv4", sif_ip),
	AAAA("ip", sif_ip6),
	AAAA("ipv6", sif_ip6),

	// Test domain
	A("sif", sif_ip),
	CNAME("beta", "sif.kromey.us."),
	AAAA("sif", sif_ip6),

	// Gitea
	A("git", sif_ip),

	// Static resources; still used?
	A("static", sif_ip),
	AAAA("static", sif_ip6),

	CAA("@", "iodef", "mailto:travisvz+iodef@gmail.com"),
	CAA("@", "issue", "letsencrypt.org"),

	// Alias DNS for home network
	CNAME("home", "asgard.kromey.us."),

	// Some of these aren't used anymore, some still are; need to figure out which are which
	CNAME("eldrin", "sif.kromey.us."),
	CNAME("ksp", "kromey.us.", CF_PROXY_ON),
	CNAME("ksp-media", "ksp.kromey.us.", CF_PROXY_ON),
	CNAME("media", "kromey.us."),
	CNAME("moonlit", "sif.kromey.us.", CF_PROXY_ON),
	CNAME("nabu", "sif.kromey.us."),
	CNAME("nether", "kromey.us.", CF_PROXY_ON),
	CNAME("notes", "sif.kromey.us.", CF_PROXY_ON),
	CNAME("pathfinder", "kromey.us.", CF_PROXY_ON),
	CNAME("postfix", "sif.kromey.us."),
	CNAME("projects", "sif.kromey.us."),
	CNAME("roglick", "sif.kromey.us.", CF_PROXY_ON),
	CNAME("roguetrader", "kromey.github.io."),
	CNAME("skyrim", "kromey.us.", CF_PROXY_ON),
	CNAME("sphinx", "sif.kromey.us."),
	CNAME("stories", "sif.kromey.us.", CF_PROXY_ON),

	// Google verifications, but for what? Still needed?
	CNAME("googleffffffffe41113d2", "google.com."),
	CNAME("yeo7agigjj7e", "gv-34hbnmv6gqpyxf.dv.googlehosted.com."),
	TXT("@", "google-site-verification=LC8jhwjgJ1rxphDc-1VGzurWyf7qOwQ_V-Lx2CrucY8"),

	TXT("_dmarc", "v=DMARC1; p=none; rua=mailto:kromey-d@dmarc.report-uri.com; sp=none; adkim=r; aspf=r"),
	TXT("@", "v=spf1 include:_spf.mx.cloudflare.net a:sif.kromey.us ~all"),
	TXT("sif1._domainkey", "v=DKIM1; k=ed25519; p=hncnMTdDpMxUP8Shch1hFHZ7L/xFQm+wRuVx62HJTd8="),
);

