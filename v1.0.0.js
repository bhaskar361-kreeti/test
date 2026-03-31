(function () {
  function cssStylesForCookieBanner(
    bannerBgColor,
    primaryColor,
    secondaryColor,
    textColor
  ) {
    return `
  .kw-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${bannerBgColor};
    color: ${textColor};
    padding: 20px 24px;
    z-index: 9999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .kw-banner-content {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  .kw-banner-text h2 {
    margin: 0 0 6px 0;
    font-size: 16px;
    font-weight: 600;
    color: ${textColor};
  }

  .kw-banner-text p {
    margin: 0;
    font-size: 14px;
    color: ${textColor};
    line-height: 1.5;
  }

  .kw-banner-text a {
    color: ${primaryColor};
    text-decoration: none;
    font-size: 14px;
    margin-top: 6px
  }

  .kw-banner-text a:hover {
    text-decoration: underline;
  }

  .kw-banner-actions {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
  }

  .kw-btn {
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  .kw-btn-primary {
    background: ${primaryColor};
    color: ${textColor};
    padding: 10px 20px;
    border-radius: 9999px;
    font-weight: 600;
  }

  .kw-btn-primary:hover {
    opacity: 0.95;
  }

  .kw-btn-secondary {
    color: ${primaryColor}; 
  }

  .kw-btn-secondary:hover {
    text-decoration: underline;
  }

  .kw-btn-tertiary {
    color: ${textColor};
    background-color: ${secondaryColor};
    padding: 10px 20px;
    border-radius: 9999px;
  }

  .kw-btn-tertiary:hover {
    opacity: 0.95;
  }

  .kw-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 9998;
  }

  .kw-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.96);
    width: 480px;
    max-width: calc(100vw - 40px);
    max-height: calc(100vh - 80px);
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
    z-index: 10000;
    overflow-y: auto;
    padding: 32px;
    animation: kwPopupIn 0.25s ease-out forwards;
  }

  @keyframes kwPopupIn {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.94); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }

  .kw-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
  }

  .kw-header h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    color: ${textColor};
  }

  .kw-close {
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #999;
  }

  .kw-section {
    margin-bottom: 0;
    padding-bottom: 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .kw-section:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .kw-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .kw-section-header h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: ${textColor};
  }

  .kw-description {
    font-size: 13px;
    color: ${textColor};
    margin-bottom: 12px;
  }

  .kw-toggle {
    width: 50px;
    height: 28px;
    background: #d1d5db;
    border-radius: 9999px;
    position: relative;
    cursor: pointer;
    transition: background 0.2s;
    --toggle-color: ${primaryColor};
    margin-top: 4px;
  }

  .kw-toggle::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: transform 0.2s;
  }

  .kw-toggle.active {
    background: var(--toggle-color);
  }

  .kw-toggle.active::after {
    transform: translateX(22px);
  }

  .kw-toggle.necessary-disabled {
    background: var(--toggle-color);
    cursor: not-allowed;
    opacity: 0.65;
  }

  .kw-toggle.necessary-disabled::after {
    transform: translateX(22px);
  }

  .kw-tag {
    display: inline-block;
    background-color: #22c55e;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 8px;
    vertical-align: middle;
  }

  .kw-footer {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid #e5e7eb;
  }

  .kw-save-btn {
    flex: none;
    background: ${primaryColor};
    color: ${textColor}; 
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }

  .kw-save-btn:hover {
    opacity: 0.95;
  }

  #kw-powered {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 12px;
    gap: 4px;
  }

  #kw-powered::before {
    content: 'Powered by';
    font-size: 12px;
    color: #666;
  }

  #kw-powered img {
    height: 19px;
  }

  @media (max-width: 768px) {
    .kw-banner-content {
      flex-direction: column;
      align-items: flex-start;
    }

    .kw-banner-actions {
      width: 100%;
      justify-content: space-between;
    }

    .kw-panel {
      width: calc(100vw - 24px);
      max-height: calc(100vh - 24px);
      padding: 24px;
      border-radius: 12px;
    }
  }
`;
  }

  function init() {
    const KAWACH_COOKIE_CONFIG = window.kawach_cookie_banner_config;

    if (!KAWACH_COOKIE_CONFIG || !KAWACH_COOKIE_CONFIG.token) {
      console.error('Kawach: No valid configuration found');
      return;
    }

    const IS_PREVIEW = window.__KAWACH_PREVIEW__ || false;
    const KAWACH_COOKIE_NAME = 'cookie_consent_' + KAWACH_COOKIE_CONFIG.token;

    // Google Consent Mode v2
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    const gcmDefaultConsent = {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      security_storage: 'denied',
      personalization_storage: 'denied',
      wait_for_update: 500,
    };

    gtag('consent', 'default', gcmDefaultConsent);

    // Cookie Management
    function setCookie(name, value, days) {
      if (IS_PREVIEW) return;
      const expires = new Date(Date.now() + days * 86400000).toUTCString();
      document.cookie =
        name +
        '=' +
        encodeURIComponent(value) +
        '; expires=' +
        expires +
        '; path=/; SameSite=Lax';
    }

    function getCookie(name) {
      const match = document.cookie.match(
        new RegExp('(^| )' + name + '=([^;]+)')
      );
      return match ? decodeURIComponent(match[2]) : null;
    }

    // Google Consent Mapping
    const GOOGLE_CONSENT_MAP = [
      { prefKey: 'analytics', signals: ['analytics_storage'] },
      {
        prefKey: 'marketing',
        signals: ['ad_storage', 'ad_user_data', 'ad_personalization'],
      },
      {
        prefKey: 'functional',
        signals: [
          'functionality_storage',
          'security_storage',
          'personalization_storage',
        ],
      },
    ];

    function buildGoogleConsentPayload(preferences) {
      const payload = {};
      GOOGLE_CONSENT_MAP.forEach(({ prefKey, signals }) => {
        const value = preferences[prefKey] ? 'granted' : 'denied';
        signals.forEach(signal => (payload[signal] = value));
      });
      return payload;
    }

    function updateGoogleConsent(preferences) {
      gtag('consent', 'update', buildGoogleConsentPayload(preferences));
    }

    function injectStyles() {
      if (document.getElementById('cookie-consent-styles')) return;
      const style = document.createElement('style');
      style.id = 'cookie-consent-styles';
      const { customStyle = {} } = KAWACH_COOKIE_CONFIG;
      style.textContent = cssStylesForCookieBanner(
        customStyle.bannerBgColor || '#1E293B',
        customStyle.primaryColor || '#3B82F6',
        customStyle.secondaryColor || '#475569',
        customStyle.textColor || '#F8FAFC'
      );
      document.head.appendChild(style);
    }

    class CookieConsent {
      constructor() {
        this.preferences = this.loadPreferences();
        this.init();
      }

      init() {
        injectStyles();
        if (this.hasUserConsented()) {
          updateGoogleConsent(this.preferences);
          this.applyConsent();
        } else {
          this.showBanner();
        }
        this.addSettingsLink();
      }

      hasUserConsented() {
        if (IS_PREVIEW) return false;
        const stored = getCookie(KAWACH_COOKIE_NAME);
        if (!stored) return false;
        try {
          const data = JSON.parse(stored);
          return Boolean(data.preferences);
        } catch {
          return false;
        }
      }

      loadPreferences() {
        const stored = getCookie(KAWACH_COOKIE_NAME);
        if (stored) {
          try {
            const data = JSON.parse(stored);
            return data.preferences;
          } catch {}
        }
        return {
          necessary: true,
          analytics: false,
          marketing: false,
          functional: false,
        };
      }

      savePreferences(prefs) {
        prefs.necessary = true;
        setCookie(
          KAWACH_COOKIE_NAME,
          JSON.stringify({
            preferences: prefs,
            timestamp: new Date().toISOString(),
          }),
          KAWACH_COOKIE_CONFIG.consentExpiryDays || 180
        );
        this.recordConsent(prefs);
      }

      recordConsent(prefs) {
        if (!KAWACH_COOKIE_CONFIG.endpoint || IS_PREVIEW) return;

        fetch(KAWACH_COOKIE_CONFIG.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Consent-Token': KAWACH_COOKIE_CONFIG.token,
          },
          body: JSON.stringify({
            preferences: prefs,
            consentVersion: KAWACH_COOKIE_CONFIG.consentVersion,
            timestamp: new Date().toISOString(),
          }),
        }).catch(() => {});
      }

      showBanner() {
        if (document.getElementById('kawach_cookie_banner')) return;

        const banner = document.createElement('div');
        banner.id = 'kawach_cookie_banner';
        banner.className = 'kw-banner';
        banner.innerHTML =
          '<div class="kw-banner-content">' +
          '<div class="kw-banner-text">' +
          '<h2>' +
          KAWACH_COOKIE_CONFIG.bannerTitle +
          '</h2>' +
          '<p>' +
          KAWACH_COOKIE_CONFIG.bannerDescription +
          '</p>' +
          (KAWACH_COOKIE_CONFIG.privacyUrl
            ? '<a href="' +
              KAWACH_COOKIE_CONFIG.privacyUrl +
              '" target="_blank">Privacy Policy</a>'
            : '') +
          '</div>' +
          '<div class="kw-banner-actions">' +
          '<button class="kw-btn kw-btn-secondary" id="kawach_customize_btn">Manage preferences</button>' +
          '<button class="kw-btn kw-btn-tertiary" id="kawach_reject_btn">Reject optional</button>' +
          '<button class="kw-btn kw-btn-primary" id="kawach_accept_all_btn">Accept all</button>' +
          '</div>' +
          '</div>';

        document.body.appendChild(banner);
        document.getElementById('kawach_accept_all_btn').onclick = () =>
          this.acceptAll();
        document.getElementById('kawach_reject_btn').onclick = () =>
          this.rejectOptional();
        document.getElementById('kawach_customize_btn').onclick = () =>
          this.showPreferences();
      }

      showPreferences() {
        let overlay = document.getElementById('kawach_cookie_overlay');
        if (!overlay) {
          overlay = document.createElement('div');
          overlay.id = 'kawach_cookie_overlay';
          overlay.className = 'kw-overlay';
          overlay.onclick = e => {
            if (e.target === overlay) this.closePreferences();
          };
          document.body.appendChild(overlay);
        }

        let panel = document.getElementById('kawach_cookie_preferences');
        if (!panel) {
          panel = document.createElement('div');
          panel.id = 'kawach_cookie_preferences';
          panel.className = 'kw-panel';
          panel.innerHTML =
            '<div class="kw-header">' +
            '<h2>Preference Center</h2>' +
            '<button class="kw-close" id="kawach_prefs_close_btn">&times;</button>' +
            '</div>' +
            '<div id="kawach_prefs_categories"></div>' +
            '<div class="kw-footer">' +
            '<button class="kw-save-btn" id="kawach_prefs_save_btn">Save Preferences</button>' +
            '<div id="kw-powered"><img src="https://www.kawach.ai/images/kawach-logo.svg" class="kawach-logo" /></div>' +
            '</div>';
          document.body.appendChild(panel);
          document.getElementById('kawach_prefs_close_btn').onclick = () =>
            this.closePreferences();
          document.getElementById('kawach_prefs_save_btn').onclick = () => {
            const prefs = {};
            (
              KAWACH_COOKIE_CONFIG.categories || [
                'NECESSARY',
                'ANALYTICS',
                'MARKETING',
                'FUNCTIONAL',
              ]
            ).forEach(cat => {
              const toggle = document.querySelector(
                '[data-category="' + cat.toLowerCase() + '"]'
              );
              prefs[cat.toLowerCase()] =
                cat === 'NECESSARY'
                  ? true
                  : toggle
                    ? toggle.classList.contains('active')
                    : false;
            });
            this.preferences = prefs;
            this.saveAndClose();
          };
        }
        this.renderPreferences();
      }

      renderPreferences() {
        const container = document.getElementById('kawach_prefs_categories');
        container.innerHTML = '';
        const categories = KAWACH_COOKIE_CONFIG.categories || [
          'NECESSARY',
          'ANALYTICS',
          'MARKETING',
          'FUNCTIONAL',
        ];

        const descriptions = {
          NECESSARY:
            'These cookies are essential so that you can move around the website and use its features.',
          ANALYTICS:
            'These cookies track user behaviour on the website, such as pages visited and duration.',
          MARKETING:
            'These cookies help identify users to show relevant advertising material.',
          FUNCTIONAL:
            'These cookies remember choices you make, such as language and region preferences.',
        };

        categories.forEach(cat => {
          const pref =
            cat === 'NECESSARY' ? true : this.preferences[cat.toLowerCase()];
          const div = document.createElement('div');
          div.className = 'kw-section';

          div.innerHTML =
            '<div class="kw-section-header">' +
            '<h3>' +
            cat.charAt(0) +
            cat.slice(1).toLowerCase() +
            '</h3>' +
            (cat === 'NECESSARY'
              ? '<span class="kw-tag">Required</span>'
              : '<div class="kw-toggle ' +
                (pref ? 'active' : '') +
                '" data-category="' +
                cat.toLowerCase() +
                '"></div>') +
            '</div>' +
            '<div class="kw-description">' +
            descriptions[cat] +
            '</div>';

          container.appendChild(div);

          if (cat !== 'NECESSARY') {
            const toggle = div.querySelector('.kw-toggle');
            if (toggle) {
              toggle.onclick = () => {
                toggle.classList.toggle('active');
                this.preferences[cat.toLowerCase()] =
                  toggle.classList.contains('active');
              };
            }
          }
        });
      }

      acceptAll() {
        this.preferences = {
          necessary: true,
          analytics: true,
          marketing: true,
          functional: true,
        };
        this.saveAndClose();
      }

      rejectOptional() {
        this.preferences = {
          necessary: true,
          analytics: false,
          marketing: false,
          functional: false,
        };
        this.saveAndClose();
      }

      closePreferences() {
        const panel = document.getElementById('kawach_cookie_preferences');
        const overlay = document.getElementById('kawach_cookie_overlay');
        if (panel) panel.remove();
        if (overlay) overlay.remove();
      }

      saveAndClose() {
        if (IS_PREVIEW) return;
        this.savePreferences(this.preferences);
        const banner = document.getElementById('kawach_cookie_banner');
        if (banner) banner.remove();
        this.closePreferences();
        this.applyConsent();
      }

      applyConsent() {
        updateGoogleConsent(this.preferences);
      }

      addSettingsLink() {
        const trigger = document.getElementById('kawach_cookie_settings_slot');
        if (!trigger) return;
        trigger.style.cursor = 'pointer';
        trigger.addEventListener('click', e => {
          e.preventDefault();
          this.showPreferences();
        });
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => new CookieConsent());
    } else {
      new CookieConsent();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
