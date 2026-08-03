
D("ladybugwoodworking.com", REG_NONE, DnsProvider(DSP_CLOUDFLARE),
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

	TXT("_dmarc", "v=DMARC1; p=reject; pct=100; rua=mailto:re+j2jjwiijyso@dmarc.postmarkapp.com; sp=reject; aspf=r;"),
	TXT("google._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlVYA7DLCzLjWx/pFnqH7PHrQ2L9+ER0C3JLm8FS6Dt06UbS7ufj8XG7HftEXwcvdjJAOXdrWXzo6/SzzQnnchQSc5izy/d09PZV9wDH1mW4JW/e6pXr13wiLs+KL8+Z5VyjR+9u5oA+VchtrMTVfwkfClBpvemq/21emFWWoV2Kd/KGe1UYi05cKFSculOSeO FM2669ied5BLLuMviIUKttWNbgu9vV/1DwI+aJl/1dr7mr1/LfeTwZfhY+BWeUlY7VBNJrmNJqTAM8zOuDvd8WSRqjWSwo87N6Uv5NOn2TV2TF3KD6Ce0os9laIXGBcDyn7zLCxymyu6oOY63FOnwIDAQAB"),
	TXT("@", "google-site-verification=7_K1dLWmLzgbjT6W7fPrNTAvLyx8KkXHwC3ECGlgbGU"),
	TXT("@", "pinterest-site-verification=7fb78f6a5ecdffc89ea6a3dfd8236b35"),
	TXT("@", "v=spf1 include:_spf.google.com ~all"),
);

