
D("ladybugwoodwork.com", REG_NONE, DnsProvider(DSP_CLOUDFLARE),
	DefaultTTL(1),
	CF_PROXY_DEFAULT_OFF,
	CF_MANAGE_COMMENTS, // opt into comments syncing

	A("@", "216.239.38.21", CF_PROXY_ON),
	A("@", "216.239.36.21", CF_PROXY_ON),
	A("@", "216.239.34.21", CF_PROXY_ON),
	A("@", "216.239.32.21", CF_PROXY_ON),

	AAAA("@", "2001:4860:4802:38::15", CF_PROXY_ON),
	AAAA("@", "2001:4860:4802:36::15", CF_PROXY_ON),
	AAAA("@", "2001:4860:4802:34::15", CF_PROXY_ON),
	AAAA("@", "2001:4860:4802:32::15", CF_PROXY_ON),

	CNAME("_domainconnect", "connect.domains.google.com."),
	CNAME("k2._domainkey", "dkim2.mcsv.net."),
	CNAME("k3._domainkey", "dkim3.mcsv.net."),

	CNAME("calendar", "ghs.googlehosted.com."),
	CNAME("drive", "ghs.googlehosted.com."),
	CNAME("groups", "ghs.googlehosted.com."),
	CNAME("mail", "ghs.googlehosted.com."),
	CNAME("sites", "ghs.googlehosted.com."),
	CNAME("www", "ghs.googlehosted.com."),

	MX("@", 10, "alt4.aspmx.l.google.com."),
	MX("@", 10, "alt3.aspmx.l.google.com."),
	MX("@", 5, "alt2.aspmx.l.google.com."),
	MX("@", 5, "alt1.aspmx.l.google.com."),
	MX("@", 1, "aspmx.l.google.com."),

	TXT("_dmarc", "v=DMARC1; p=reject; pct=100; rua=mailto:7b699cd630ca437faa03837b2e33d88d@dmarc-reports.cloudflare.net,mailto:re+k4erqbrwk6g@dmarc.postmarkapp.com; sp=reject; aspf=s; adkim=s;"),
	TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAomIil0JQZ4n9Wtw4VvmmZwUM3a3jQRDs61em27WUfBJaRzR2L1VzFc2kbiKJE98upL84YLU9nPva1Iw6+DMLyRR82WBmvUyen9+wxVurZ1/nfXBrXznMes725ASmlzFQVIgNR0A5dFdVRvKPT3GGX5n/50KNqPuFGoZqN5jhtb+TNufhk0TDvsk/PKOoC7s+v IJG4HMWPA9UJV0QIj/0hBsECjhNK1bms+3oOwi6bWew7/fjBtlJg8A/FmTh+CY7yYhdjZgOBtkFdaLU4FPJDgu9lWdtjJkSNlvYsfJeI327Vm0x2rMgPAs0g7yJfoYZ1r/mf+Jr41gHm6lilxHD6QIDAQAB"),
	TXT("@", "google-site-verification=ZBg0Uk40fu-4Vx32nedEcapYDIrmgRWQ78uc3xGozkQ"),
	TXT("@", "pinterest-site-verification=7fb78f6a5ecdffc89ea6a3dfd8236b35"),
	TXT("@", "v=spf1 include:_spf.google.com ~all"),
);

