import { Link, LinkProps } from 'react-router-dom';
import { ClientLinkProps as ILink, NativeLinkEnumeration, Links } from '../../types/components/ClientLink';
import React, { HTMLAttributes } from 'react'

function ClientLink({ href, ...rest }: { href: ILink } & Omit<LinkProps, "to"> & HTMLAttributes<HTMLAnchorElement>) {
    let proccessedLink = href.custom_href;

    if (!href.custom_href && href.href) {

        switch (href.href) {
            case NativeLinkEnumeration.it:
                proccessedLink = Links.IT;
                break;

            case NativeLinkEnumeration.ecommerce:
                proccessedLink = Links.ecommrece;
                break;

            case NativeLinkEnumeration.cars:
                proccessedLink = Links.CARS;
                break;

            case NativeLinkEnumeration.about:
                proccessedLink = Links.ABOUT;
                break;

            case NativeLinkEnumeration.home:
                proccessedLink = Links.HOME;
                break;

            case NativeLinkEnumeration.services:
                proccessedLink = Links.SERVICES;
                break;

            case NativeLinkEnumeration.clients:
                proccessedLink = Links.CLIENTS;
                break;

            case NativeLinkEnumeration.login:
                proccessedLink = Links.LOGIN;
                break;

            case NativeLinkEnumeration.artical:
                proccessedLink = Links.ARTICAL;
                break;
        }
    }

    return (
        <Link {...rest} to={proccessedLink || ""} />
    )
}

export default ClientLink