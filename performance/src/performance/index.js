const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BaseControl, PanelRow, PanelBody, ToggleControl, Spinner } = wp.components;

class PerformanceSettings extends Component {
    constructor() {
        super(...arguments);

        this.changeOptions = this.changeOptions.bind(this);

        this.state = {
            isApiLoaded: false,
            isApiSaving: false,
            opt_defer_js: true,
            opt_defer_css: false,
            opt_disable_rsd: true,
            opt_disable_emoji: true,
            opt_disable_xmlrpc: true,
            opt_disable_embed: false,
            opt_disable_feeds: false,
            opt_slow_heartbeat: true,
            opt_limit_revisions: true,
            opt_jquery_to_footer: true,
            opt_limit_comments_js: true,
            opt_disable_comments: false,
            opt_disable_shortlinks: true,
            opt_disable_wp_version: true,
            opt_disable_wlwmanifest: true,
            opt_block_external_http: false,
            opt_remove_comments_style: true,
            opt_disable_jquery_migrate: true,
            opt_disable_version_numbers: true,
        }
    }

    componentDidMount() {
        wp.api.loadPromise.then(() => {
            this.settings = new wp.api.models.Settings();

            if (false === this.state.isApiLoaded) {
                this.settings.fetch().then(response => {
                    this.setState({
                        opt_block_external_http: Boolean(response.opt_block_external_http),
                        opt_defer_css: Boolean(response.opt_defer_css),
                        opt_defer_js: Boolean(response.opt_defer_js),
                        opt_disable_comments: Boolean(response.opt_disable_comments),
                        opt_disable_embed: Boolean(response.opt_disable_embed),
                        opt_disable_emoji: Boolean(response.opt_disable_emoji),
                        opt_disable_feeds: Boolean(response.opt_disable_feeds),
                        opt_disable_jquery_migrate: Boolean(response.opt_disable_jquery_migrate),
                        opt_disable_rsd: Boolean(response.opt_disable_rsd),
                        opt_disable_shortlinks: Boolean(response.opt_disable_shortlinks),
                        opt_disable_version_numbers: Boolean(response.opt_disable_version_numbers),
                        opt_disable_wlwmanifest: Boolean(response.opt_disable_wlwmanifest),
                        opt_disable_wp_version: Boolean(response.opt_disable_wp_version),
                        opt_disable_xmlrpc: Boolean(response.opt_disable_xmlrpc),
                        opt_jquery_to_footer: Boolean(response.opt_jquery_to_footer),
                        opt_limit_comments_js: Boolean(response.opt_limit_comments_js),
                        opt_limit_revisions: Boolean(response.opt_limit_revisions),
                        opt_remove_comments_style: Boolean(response.opt_remove_comments_style),
                        opt_slow_heartbeat: Boolean(response.opt_slow_heartbeat),
                        isApiLoaded: true
                    });
                });
            }
        });
    }

    changeOptions(option, value) {
        this.setState({ isApiSaving: true });

        const model = new wp.api.models.Settings({
            [option]: value,
        });

        model.save().then(response => {
            this.setState({
                [option]: response[option],
                isApiSaving: false
            });
        });
    }

    render() {

        if (!this.state.isApiLoaded) {
            return (
                <Spinner />
            );
        }

        return (
            <Fragment>
                <div className="performance-header">
                    <div className="performance-container">
                        <div className="performance-heading">
                            <h1>{__('Performance Optimizations', 'performance')}</h1>
                        </div>
                    </div>
                </div>
                <div className="performance-settings">
                    <PanelBody>
                        <BaseControl
                            label={__('Please note that, the default settings are optimal for majority of the websites. Some settings may break your website\'s layout. Tweak the settings with caution!', 'performance')}
                        >
                            <PanelRow>
                                <ToggleControl
                                    label={__('Block Externl HTTP Request?', 'performance')}
                                    checked={this.state.opt_block_external_http}
                                    onChange={() => this.changeOptions('opt_block_external_http', !this.state.opt_block_external_http)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Defer CSS?', 'performance')}
                                    checked={this.state.opt_defer_css}
                                    onChange={() => this.changeOptions('opt_defer_css', !this.state.opt_defer_css)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Defer JS?', 'performance')}
                                    checked={this.state.opt_defer_js}
                                    onChange={() => this.changeOptions('opt_defer_js', !this.state.opt_defer_js)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable Comments?', 'performance')}
                                    checked={this.state.opt_disable_comments}
                                    onChange={() => this.changeOptions('opt_disable_comments', !this.state.opt_disable_comments)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable Embed?', 'performance')}
                                    checked={this.state.opt_disable_embed}
                                    onChange={() => this.changeOptions('opt_disable_embed', !this.state.opt_disable_embed)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable Emoji?', 'performance')}
                                    checked={this.state.opt_disable_emoji}
                                    onChange={() => this.changeOptions('opt_disable_emoji', !this.state.opt_disable_emoji)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable Feeds?', 'performance')}
                                    checked={this.state.opt_disable_feeds}
                                    onChange={() => this.changeOptions('opt_disable_feeds', !this.state.opt_disable_feeds)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable jQuery Migrate?', 'performance')}
                                    checked={this.state.opt_disable_jquery_migrate}
                                    onChange={() => this.changeOptions('opt_disable_jquery_migrate', !this.state.opt_disable_jquery_migrate)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable RSD Links?', 'performance')}
                                    checked={this.state.opt_disable_rsd}
                                    onChange={() => this.changeOptions('opt_disable_rsd', !this.state.opt_disable_rsd)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable Shortlinks?', 'performance')}
                                    checked={this.state.opt_disable_shortlinks}
                                    onChange={() => this.changeOptions('opt_disable_shortlinks', !this.state.opt_disable_shortlinks)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable Version Numbers?', 'performance')}
                                    checked={this.state.opt_disable_version_numbers}
                                    onChange={() => this.changeOptions('opt_disable_version_numbers', !this.state.opt_disable_version_numbers)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable WLW Manifest?', 'performance')}
                                    checked={this.state.opt_disable_wlwmanifest}
                                    onChange={() => this.changeOptions('opt_disable_wlwmanifest', !this.state.opt_disable_wlwmanifest)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable WP Version?', 'performance')}
                                    checked={this.state.opt_disable_wp_version}
                                    onChange={() => this.changeOptions('opt_disable_wp_version', !this.state.opt_disable_wp_version)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Disable XMLRPC?', 'performance')}
                                    checked={this.state.opt_disable_xmlrpc}
                                    onChange={() => this.changeOptions('opt_disable_xmlrpc', !this.state.opt_disable_xmlrpc)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Place jQuery to Footer?', 'performance')}
                                    checked={this.state.opt_jquery_to_footer}
                                    onChange={() => this.changeOptions('opt_jquery_to_footer', !this.state.opt_jquery_to_footer)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Limit Comments JS?', 'performance')}
                                    checked={this.state.opt_limit_comments_js}
                                    onChange={() => this.changeOptions('opt_limit_comments_js', !this.state.opt_limit_comments_js)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Limit Revisions to 5?', 'performance')}
                                    checked={this.state.opt_limit_revisions}
                                    onChange={() => this.changeOptions('opt_limit_revisions', !this.state.opt_limit_revisions)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Remove Comments Style?', 'performance')}
                                    checked={this.state.opt_remove_comments_style}
                                    onChange={() => this.changeOptions('opt_remove_comments_style', !this.state.opt_remove_comments_style)}
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={__('Slowdown Heartbeat API?', 'performance')}
                                    checked={this.state.opt_slow_heartbeat}
                                    onChange={() => this.changeOptions('opt_slow_heartbeat', !this.state.opt_slow_heartbeat)}
                                />
                            </PanelRow>
                        </BaseControl>
                    </PanelBody>
                </div>
            </Fragment>
        );
    }
}

export default PerformanceSettings;