
D("kromey.com", REG_NONE, DnsProvider(DSP_CLOUDFLARE),
	DefaultTTL(1),
	CF_PROXY_DEFAULT_OFF,
	CF_MANAGE_COMMENTS, // opt into comments syncing

	A("@", sif_ip),
	AAAA("@", sif_ip6),

	CNAME("www", "kromey.com."),

	TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; aspf=s; adkim=s;"),
	TXT("*._domainkey", "v=DKIM1; p="),
	TXT("@", "v=spf1 -all"),
);

