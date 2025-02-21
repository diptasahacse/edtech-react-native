import { IPagination, IPaginationLink } from "../types/pagination";

export class PaginationLinkModel {
  private readonly url: null | string;
  private readonly label: string;
  private readonly active: boolean;

  constructor(data: IPaginationLink) {
    this.url = data.url;
    this.label = data.label;
    this.active = data.active;
  }
  getUrl(): null | string {
    return this.url;
  }
  getLabel(): string {
    return this.label;
  }
  getActive(): boolean {
    return this.active;
  }
}

export class PaginationModel {
  private readonly current_page: number;
  private readonly first_page_url: string;
  private readonly from: number;
  private readonly last_page: number;
  private readonly last_page_url: string;
  private readonly links: PaginationLinkModel[];
  private readonly next_page_url: string;
  private readonly path: string;
  private readonly per_page: number;
  private readonly prev_page_url: null | string;
  private readonly to: number;
  private readonly total: number;

  constructor(data: IPagination) {
    this.current_page = data.current_page;
    this.first_page_url = data.first_page_url;
    this.from = data.from;
    this.last_page = data.last_page;
    this.last_page_url = data.last_page_url;
    this.links = data.links.map((link) => new PaginationLinkModel(link));
    this.next_page_url = data.next_page_url;
    this.path = data.path;
    this.per_page = data.per_page;
    this.prev_page_url = data.prev_page_url;
    this.to = data.to;
    this.total = data.total;
  }
  getCurrentPage(): number {
    return this.current_page;
  }
  getFirstPageUrl(): string {
    return this.first_page_url;
  }
  getFrom(): number {
    return this.from;
  }
  getLastPage(): number {
    return this.last_page;
  }
  getLastPageUrl(): string {
    return this.last_page_url;
  }
  getLinks(): PaginationLinkModel[] {
    return this.links;
  }
  getNextPageUrl(): string {
    return this.next_page_url;
  }
  getPath(): string {
    return this.path;
  }
  getPerPage(): number {
    return this.per_page;
  }
  getPrevPageUrl(): null | string {
    return this.prev_page_url;
  }
  getTo(): number {
    return this.to;
  }
  getTotal(): number {
    return this.total;
  }
}
